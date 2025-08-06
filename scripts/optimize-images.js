const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImage = async (inputPath, outputPath, filename) => {
  try {
    const ext = path.extname(filename).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .resize(1920, 1080, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: 80, 
          progressive: true,
          mozjpeg: true 
        })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .resize(1920, 1080, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .png({ 
          quality: 80, 
          compressionLevel: 9,
          palette: true 
        })
        .toFile(outputPath);
    } else if (ext === '.webp') {
      await sharp(inputPath)
        .resize(1920, 1080, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 80 
        })
        .toFile(outputPath);
    }
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${(inputSize / 1024 / 1024).toFixed(2)}MB → ${(outputSize / 1024 / 1024).toFixed(2)}MB (${savings}% reduction)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
};

const optimizeAllImages = async () => {
  console.log('🚀 Starting image optimization...\n');
  
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file) && 
    !file.includes('.mp4') // Skip video files
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    await optimizeImage(inputPath, outputPath, file);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log(`Optimized images saved to: ${outputDir}`);
};

optimizeAllImages().catch(console.error);