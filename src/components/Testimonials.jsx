// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ada & Chuka",
      location: "Stress-Free Honeymoon in Zanzibar",
      content: "We were overwhelmed with wedding planning, so we left the honeymoon to the experts. The travel agency booked us a dreamy 5-night stay in Zanzibar with oceanfront views, couples' spa, and private island tours. All we did was show up everything else was flawless!",
      rating: 5
    },
    {
      id: 2,
      name: "Tope A.",
      location: "My First Solo Trip – and I Didn’t Panic Once!",
      content: "I wanted to travel solo to South Africa but didn’t know where to start. The agency helped me choose safe, fun spots and arranged airport pickups, tours, and even a SIM card. I felt safe and empowered the entire time. Already planning my next trip!",
      rating: 5
    },
    {
      id: 3,
      name: "The Okonkwo Family",
      location: "Family Vacation That Didn’t End in Tears",
      content: "We wanted a holiday where both our kids and grandparents could enjoy themselves. The agency put together a Dubai family package with kid-friendly parks, cultural tours, and wheelchair access for Grandma. Smooth, fun, and actually relaxing!",
      rating: 5
    },
    {
      id: 4,
      name: "Emeka U. Corporate Executive",
      location: "Saved My Business Trip",
      content: "My visa was delayed and I was losing hope. The travel agency fast-tracked the process, rebooked my flights, and got me to London just in time for a major pitch. Without them, I would’ve lost the deal!",
      rating: 5
    },
    {
      id: 5,
      name: "ENgozi & Friends",
      location: "Girls’ Getaway Done Right",
      content: "We just wanted a fun, stress-free girls’ trip — no planning drama. The agency handled everything from Bali villa bookings to airport transfers and even sent us a packing list. It felt like a reality show vacation, minus the chaos.",
      rating: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="Testimonials" className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">
            Traveler Stories
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg relative">
            <FaQuoteLeft className="absolute top-0 left-0 text-6xl text-amber-100 transform -translate-x-3 -translate-y-3" />
            
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mr-6 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg">
              {testimonials[currentIndex].content}
            </p>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-amber-50 transition-colors"
            >
              &larr;
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-amber-50 transition-colors"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;