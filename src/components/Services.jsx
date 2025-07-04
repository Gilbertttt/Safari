// src/components/Services.jsx
import React, { useState } from 'react';
import { FaSafari, FaBinoculars, FaCampground, FaSun } from 'react-icons/fa';
import Airplane from '../assets/images/ross-parmly-rf6ywHVkrlY-unsplash.jpg'
import planeSeats from '../assets/images/jc-gellidon-1g3qVp7ynX4-unsplash.jpg'
import flight from '../assets/images/omar-elsharawy-_ONvFZFaUXs-unsplash.jpg'
import hotel1 from '../assets/images/yu-yi-tsai-UX_Pn1L2FkQ-unsplash.jpg'
import hotel2 from '../assets/images/jo-max-nmbvTM7rS5Q-unsplash.jpg'
import hotel3 from '../assets/images/mk-s-OGlpQis3cbQ-unsplash.jpg'
import visa1 from '../assets/images/global-residence-index-LPdaW746WAw-unsplash.jpg'
import visa2 from '../assets/images/my-spain-visa-sn0kpnmBHK0-unsplash.jpg'
import visa3 from '../assets/images/global-residence-index-Cg3fyYZMQ58-unsplash.jpg'
import packages1 from '../assets/images/david-kohler-VFRTXGw1VjU-unsplash.jpg'
import packages2 from '../assets/images/raul-varzar-cDdEFZxtuZw-unsplash.jpg'
import packages3 from '../assets/images/axp-photography-evqYZXPm3Tg-unsplash.jpg'
import trips1 from '../assets/images/alev-takil-m-_UR4QD4As-unsplash.jpg'
import trips2 from '../assets/images/jeffrey-workman-YvkH8R1zoQM-unsplash.jpg'
import trips3 from '../assets/images/jason-leung-poI7DelFiVA-unsplash.jpg'
import tour1 from '../assets/images/nick-fewings-C2zhShTnl5I-unsplash.jpg'
import tour2 from '../assets/images/headway-5QgIuuBxKwM-unsplash.jpg'
import tour3 from '../assets/images/louise-viallesoubranne-5EhN4wbfvBc-unsplash.jpg'


const Services = () => {
  const [activeTab, setActiveTab] = useState('flightBookings');
  
  const tabs = [
    { id: 'flightBookings', label: 'Flight Bookings', icon: <FaSafari /> },
    { id: 'hotelReservation', label: 'Hotel Reservations', icon: <FaBinoculars /> },
    { id: 'visaAssistance', label: 'Visa Assistance', icon: <FaCampground /> },
    { id: 'customTravelPackages', label: 'Travel Packages', icon: <FaSun /> },
    { id: 'specialTrips', label: 'Special Trips', icon: <FaSun /> },
    { id: 'tourGuidance', label: 'Tour Guidance', icon: <FaSun /> },
  ];
  
  const services = {
    flightBookings: [
      {
        title: "",
        description:"",
        duration: "",
        image: Airplane,
      },
      {
        title: "",
        description: "",
        duration: "",
         image: planeSeats,
      },
      {
        title: "",
        description: "",
        duration: "",
        image: flight,
      }
    ],
    hotelReservation: [
      {
        title: "",
        description: "",
        duration: "",
        image: hotel1
      },
      {
        title: "",
        description: "",
        duration: "",
        image: hotel2
      },
      {
        title: "",
        description: "",
        duration: "",
        image: hotel3
      }
    ],
    visaAssistance: [
      {
        title: "",
        description: "",
        duration: "",
        image: visa1
      },
      {
        title: "",
        description:"",
        duration: "",
        image: visa2
      },
      {
        title: "",
        description: "",
        duration: "",
        image: visa3
      }
    ],
  
  customTravelPackages: [
    {
      title: "",
      description: "",
      duration: "",
      image: packages1
    },
    {
      title: "",
      description: "",
      duration: "",
      image: packages2
    },
    {
      title: "",
      description: "",
      duration: "",
      image: packages3
    }
  ],
  specialTrips: [
    {
      title: "",
      description: "",
      duration: "",
      image: trips1
    },
    {
      title: "",
      description: "",
      duration: "",
      image: trips2
    },
    {
      title: "",
      description: "",
      duration: "",
      image: trips3
    }
  ],
  tourGuidance: [
    {
      title: "",
      description: "",
      duration: "",
      image: tour1
    },
    {
      title: "",
      description: "",
      duration: "",
      image: tour2
    },
    {
      title: "",
      description: "",
      duration: "",
      image: tour3
    }
  ]
};
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900">
            Our Safari Experiences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">
           Explore our carefully curated range of travel services.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services[activeTab].map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-48 relative">
             <div  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <button className="px-4 py-2 bg-white text-amber-600 rounded-md font-medium hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{service.duration}</span>
                  <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                    Book Now <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:-translate-y-1">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;