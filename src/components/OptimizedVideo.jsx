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
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          {poster ? (
            <img 
              src={poster} 
              alt="Video poster" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">Loading video...</p>
            </div>
          </div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0">
          <img 
            src={fallbackImage || poster} 
            alt="Video fallback" 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Video element - only render when in view */}
      {(isInView || priority) && userPreferenceChecked && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
          }`}
          poster={poster}
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

      {/* User controls overlay */}
      {isLoaded && !hasError && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={togglePlayPause}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Data saver notice */}
      {!shouldAutoPlay && userPreferenceChecked && !isPlaying && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded-lg">
            <p className="mb-3">Video paused to save data</p>
            <button
              onClick={togglePlayPause}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Play Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;