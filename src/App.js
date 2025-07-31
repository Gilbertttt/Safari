// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './features/aboutUs.tsx';
import TravelPackages from './features/travel-packages.tsx';
import Contact from './features/contact-us.jsx';

function App() {
  return (
    <Router>
         <div className="font-sans overflow-x-hidden scroll-smooth">
      <Navbar />
      <Routes>
      <Route
      path="/" 
      element = {
     <main>
        <Home />
        <Features />
        <Services />
        <Testimonials />
        <Stats />
        <Newsletter />
      </main>
      }/>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/travel-packages" element={<TravelPackages />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
 
  );
}

export default App;