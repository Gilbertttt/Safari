// src/components/Features.jsx
import React from 'react';
import { FaMapMarkedAlt, FaUserFriends, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-amber-500" />,
      title: "Flight Bookings",
      description: "Domestic and international flights at competitive rates with flexible options."
    },
    {
      icon: <FaUserFriends className="text-4xl text-amber-500" />,
      title: "Hotel Reservations",
      description: "Handpicked stays—from luxury resorts to cozy budget lodges."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-amber-500" />,
      title: "Visa Assistance",
      description: "End-to-end guidance to help you secure your visa quickly and easily."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900">
            Safari Trips
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">
           We offer unforgettable travel experiences, completely hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:-translate-y-1">
            View All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;