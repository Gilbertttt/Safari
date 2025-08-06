import React, { useState, useRef, useEffect } from 'react';

const OptimizedVideo = ({ 
  src, 
  poster, 
  className = '', 
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "none",
  priority = false,
  fallbackImage,
  onLoadStart,
  onCanPlay
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPreferenceChecked, setUserPreferenceChecked] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const videoRef = useRef();
  const containerRef = useRef();

  // Check user's data preference and connection
  useEffect(() => {
    const checkDataPreference = () => {
      // Check if user has reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check connection quality
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData === true
      );

      // Only auto-play if user hasn't indicated preference for reduced motion or data saving
      const shouldPlay = !prefersReducedMotion && !isSlowConnection && autoPlay;
      setShouldAutoPlay(shouldPlay);
      setUserPreferenceChecked(true);

      if (isSlowConnection || connection?.saveData) {
        console.log('Slow connection detected - video autoplay disabled for better performance');
      }
    };

    checkDataPreference();
  }, [autoPlay]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Start loading when close to viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle video events
  const handleLoadStart = () => {
    if (onLoadStart) onLoadStart();
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
    if (onCanPlay) onCanPlay();
    
    // Auto-play only if user preferences allow
    if (shouldAutoPlay && videoRef.current) {
      videoRef.current.play().catch(console.warn);
      setIsPlaying(true);
    }
  };

  const handleError = () => {
    setHasError(true);
    console.warn('Video failed to load, falling back to poster image');
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Single poster image - always visible when video isn't playing */}
      {(!isPlaying || hasError) && poster && (
        <img 
          src={poster} 
          alt="Video poster" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Video element - only render when in view and ready to play */}
      {(isInView || priority) && userPreferenceChecked && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded && !hasError && isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          {/* Multiple source formats for better compression */}
          {src.webm && <source src={src.webm} type="video/webm" />}
          {src.mp4 && <source src={src.mp4} type="video/mp4" />}
          {typeof src === 'string' && <source src={src} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Play button overlay - only show when video should be manually played */}
      {!isPlaying && userPreferenceChecked && (isInView || priority) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlayPause}
            className="bg-black bg-opacity-60 text-white p-4 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110"
            aria-label="Play video"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          {!shouldAutoPlay && (
            <div className="absolute bottom-16 text-center text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
              Tap to play video
            </div>
          )}
        </div>
      )}

      {/* Pause button - only show when video is playing */}
      {isPlaying && isLoaded && !hasError && (
        <div className="absolute bottom-4 right-4">
          <button
            onClick={togglePlayPause}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            aria-label="Pause video"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;