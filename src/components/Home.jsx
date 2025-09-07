// src/components/Hero.jsx
import React from 'react';
import OptimizedVideo from './OptimizedVideo';
import heroImage from '../assets/images/logo-SafariTrips.png'
import heroVideo from '../assets/images/2231485-uhd_3840_2160_24fps.mp4'

const Home = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/40 z-0"></div>
      
      {/* Background video */}
      <div className="absolute inset-0 z-[-1]">
        <OptimizedVideo
          src={heroVideo}
          poster={heroImage}
          fallbackImage={heroImage}
          className="w-full h-full"
          autoPlay={true}
          muted={true}
          loop={true}
          priority={true}
          preload="metadata"
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-bold text-left text-4xl md:text-6xl text-white leading-tight mb-5 transform transition-all duration-700 group-hover:scale-105">
            Discover Extraordinary <br className="hidden md:block" />
            Adventures with <br className="hidden md:block" />
            <span className="text-amber-400">Safari Trips</span>
          </h1>

          <p className="text-lg text-left text-white/90 max-w-2xl mb-8 animate-slide-up delay-100">
           Explore the world with ease, style, and confidence. At Safari Trips, we're passionate about delivering unforgettable travel experiences whether you're planning a relaxing getaway, a romantic honeymoon, an adventurous group tour, or a professional business trip.

           Your journey begins with us!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up delay-200">
         <a href='/travel-packages'>
            <button className="px-8 py-4 bg-orange-500 hover:bg-gray-900 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:-translate-y-1">
              Explore Tours
            </button>
            </a>
            <a href='/contact'>
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
            </a>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;