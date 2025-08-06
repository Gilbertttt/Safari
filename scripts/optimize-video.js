const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const inputVideo = path.join(__dirname, '../src/assets/images/2231485-uhd_3840_2160_24fps.mp4');
const outputDir = path.join(__dirname, '../src/assets/optimized-video');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const compressionConfigs = [
  {
    name: 'hero-video-1080p',
    format: 'mp4',
    videoCodec: 'libx264',
    audioCodec: 'aac',
    videoBitrate: '2000k',
    audioBitrate: '128k',
    resolution: '1920x1080',
    crf: 23,
    preset: 'medium'
  },
  {
    name: 'hero-video-720p',
    format: 'mp4',
    videoCodec: 'libx264',
    audioCodec: 'aac',
    videoBitrate: '1000k',
    audioBitrate: '96k',
    resolution: '1280x720',
    crf: 25,
    preset: 'medium'
  },
  {
    name: 'hero-video-480p',
    format: 'mp4',
    videoCodec: 'libx264',
    audioCodec: 'aac',
    videoBitrate: '500k',
    audioBitrate: '64k',
    resolution: '854x480',
    crf: 28,
    preset: 'fast'
  },
  {
    name: 'hero-video-1080p',
    format: 'webm',
    videoCodec: 'libvpx-vp9',
    audioBitrate: '128k',
    videoBitrate: '1500k',
    resolution: '1920x1080',
    crf: 30,
    preset: 'good'
  }
];

const compressVideo = (config) => {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, `${config.name}.${config.format}`);
    
    console.log(`🎬 Compressing: ${config.name}.${config.format} (${config.resolution})`);
    
    let command = ffmpeg(inputVideo)
      .videoCodec(config.videoCodec)
      .videoBitrate(config.videoBitrate)
      .size(config.resolution)
      .autopad()
      .aspect('16:9');

    if (config.audioCodec) {
      command = command.audioCodec(config.audioCodec).audioBitrate(config.audioBitrate);
    } else {
      command = command.noAudio(); // Remove audio for smaller files
    }

    if (config.crf) {
      command = command.addOption('-crf', config.crf);
    }

    if (config.preset) {
      command = command.addOption('-preset', config.preset);
    }

    // Add web optimization flags
    if (config.format === 'mp4') {
      command = command.addOption('-movflags', '+faststart'); // Enable progressive download
    }

    command
      .output(outputPath)
      .on('start', (commandLine) => {
        console.log(`   📹 Command: ${commandLine}`);
      })
      .on('progress', (progress) => {
        process.stdout.write(`\r   ⏳ Progress: ${Math.round(progress.percent || 0)}%`);
      })
      .on('end', () => {
        const stats = fs.statSync(outputPath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        console.log(`\n   ✅ Complete: ${config.name}.${config.format} (${sizeMB}MB)`);
        resolve(outputPath);
      })
      .on('error', (err) => {
        console.error(`\n   ❌ Error: ${config.name}.${config.format}`, err.message);
        reject(err);
      })
      .run();
  });
};

const generatePosterImage = () => {
  return new Promise((resolve, reject) => {
    const posterPath = path.join(outputDir, 'hero-poster.jpg');
    
    console.log('📸 Generating poster image...');
    
    ffmpeg(inputVideo)
      .screenshots({
        timestamps: ['00:00:02'],
        filename: 'hero-poster.jpg',
        folder: outputDir,
        size: '1920x1080'
      })
      .on('end', () => {
        console.log(`✅ Poster generated: hero-poster.jpg`);
        resolve(posterPath);
      })
      .on('error', reject);
  });
};

const optimizeAllVideos = async () => {
  console.log('🚀 Starting video optimization...\n');
  
  // Check if input video exists
  if (!fs.existsSync(inputVideo)) {
    console.error('❌ Input video not found:', inputVideo);
    console.log('📋 Please ensure the video file exists before running optimization');
    return;
  }

  const originalSize = fs.statSync(inputVideo).size;
  console.log(`📊 Original video size: ${(originalSize / 1024 / 1024).toFixed(2)}MB\n`);

  try {
    // Generate poster image first
    await generatePosterImage();
    console.log('');

    // Compress videos in parallel (limit concurrency to avoid overwhelming system)
    const results = [];
    for (const config of compressionConfigs) {
      try {
        const result = await compressVideo(config);
        results.push(result);
      } catch (error) {
        console.error(`Failed to compress ${config.name}.${config.format}:`, error.message);
      }
      console.log(''); // Add spacing between compressions
    }

    // Calculate total savings
    let totalOptimizedSize = 0;
    results.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        totalOptimizedSize += fs.statSync(filePath).size;
      }
    });

    const savings = ((originalSize - totalOptimizedSize) / originalSize * 100).toFixed(1);
    
    console.log('🎉 Video optimization complete!');
    console.log(`📊 Size comparison:`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Optimized (all formats): ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Savings: ${savings}%`);
    console.log(`📁 Files saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Video optimization failed:', error);
  }
};

// Check if ffmpeg is available
ffmpeg.getAvailableFormats((err, formats) => {
  if (err) {
    console.error('❌ FFmpeg not found. Please install FFmpeg:');
    console.log('   📋 macOS: brew install ffmpeg');
    console.log('   📋 Ubuntu: sudo apt install ffmpeg');
    console.log('   📋 Windows: Download from https://ffmpeg.org/download.html');
    return;
  }
  
  optimizeAllVideos().catch(console.error);
});

module.exports = { optimizeAllVideos, compressionConfigs };