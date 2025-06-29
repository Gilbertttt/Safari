// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <Features />
        <Services />
        <Testimonials />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;