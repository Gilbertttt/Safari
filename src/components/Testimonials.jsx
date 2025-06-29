// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Serengeti Safari, Tanzania",
      content: "Our safari with Safari Trips exceeded all expectations. The guides were incredibly knowledgeable, the accommodations were luxurious, and we saw all of the Big Five!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Okavango Delta, Botswana",
      content: "The attention to detail was remarkable. From the seamless airport transfers to the expertly planned game drives, everything was perfect. The mokoro experience was unforgettable!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Masai Mara, Kenya",
      content: "As a solo traveler, I felt completely safe and well taken care of. The group was small, the guide was fantastic, and I made friends for life. The Great Migration was truly spectacular.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">
            Traveler Stories
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-amber-100 mt-6">
            Hear from adventurers who've experienced our safaris
          </p>
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