// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load components for better performance
const Features = lazy(() => import('./components/Features'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Stats = lazy(() => import('./components/Stats'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const AboutUs = lazy(() => import('./features/aboutUs.tsx'));
const TravelPackages = lazy(() => import('./features/travel-packages.tsx'));
const Contact = lazy(() => import('./features/contact-us.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="font-sans overflow-x-hidden scroll-smooth">
        <PerformanceMonitor />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/" 
              element={
                <main>
                  <Home />
                  <Suspense fallback={<LoadingSpinner />}>
                    <Features />
                  </Suspense>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Services />
                  </Suspense>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Testimonials />
                  </Suspense>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Stats />
                  </Suspense>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Newsletter />
                  </Suspense>
                </main>
              }
            />

            <Route path="/aboutUs" 
            element={
            <Suspense fallback= {<LoadingSpinner/>}>
            <AboutUs />
            </Suspense>
            } />

            <Route path="/travel-packages" 
            element={
            <Suspense fallback= {<LoadingSpinner/>}>
            <TravelPackages />
            </Suspense>
            }/>
            
            <Route path="/contact" 
            element={
            <Suspense fallback= {<LoadingSpinner/>}>
            <Contact />
            </Suspense>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;