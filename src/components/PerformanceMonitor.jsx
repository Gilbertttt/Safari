import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Function to send metrics to analytics or console
    const sendToAnalytics = (metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance Metric - ${metric.name}:`, metric.value, metric.rating);
      }
      
      // In production, you could send to analytics services:
      // analytics.track('Performance Metric', {
      //   name: metric.name,
      //   value: metric.value,
      //   rating: metric.rating,
      //   url: window.location.href
      // });
    };

    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Additional custom performance measurements
    const measureCustomMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        
        if (navigation) {
          console.log('Performance Metrics:', {
            'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            'Page Load Time': navigation.loadEventEnd - navigation.navigationStart,
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
            'Server Response': navigation.responseEnd - navigation.requestStart,
            'DOM Processing': navigation.domComplete - navigation.domLoading
          });
        }

        // Measure resource loading times
        const resources = performance.getEntriesByType('resource');
        const imageResources = resources.filter(resource => 
          resource.name.includes('.jpg') || 
          resource.name.includes('.png') || 
          resource.name.includes('.webp')
        );

        if (imageResources.length > 0) {
          const avgImageLoadTime = imageResources.reduce((acc, resource) => 
            acc + resource.duration, 0) / imageResources.length;
          
          console.log(`Average Image Load Time: ${avgImageLoadTime.toFixed(2)}ms`);
          console.log(`Total Images Loaded: ${imageResources.length}`);
        }
      }
    };

    // Run custom metrics after page load
    if (document.readyState === 'complete') {
      measureCustomMetrics();
    } else {
      window.addEventListener('load', measureCustomMetrics);
    }

    return () => {
      window.removeEventListener('load', measureCustomMetrics);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;