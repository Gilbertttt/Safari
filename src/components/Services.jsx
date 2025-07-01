// src/components/Services.jsx
import React, { useState } from 'react';
import { FaSafari, FaBinoculars, FaCampground, FaSun } from 'react-icons/fa';

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
        title: "Flight Bookings",
        description:"Witness the Great Migration in Tanzania's iconic national park",
        duration: "7 Days",
      },
      {
        title: "Flight Bookings",
        description: "Explore Botswana's unique wetland ecosystem by mokoro",
        duration: "5 Days",
      },
      {
        title: "Flight Bookings",
        description: "Experience Kenya's premier wildlife destination",
        duration: "6 Days",
      }
    ],
    hotelReservation: [
      {
        title: "Hotel Reservations",
        description: "Encounter mountain gorillas in Rwanda's Volcanoes National Park",
        duration: "4 Days",
      },
      {
        title: "Hotel Reservations",
        description: "Spot lions, leopards, rhinos, elephants and buffalo",
        duration: "5 Days",
      },
      {
        title: "Hotel Reservations",
        description: "Discover Africa's incredible bird diversity",
        duration: "8 Days",
      }
    ],
    visaAssistance: [
      {
        title: "Visa Assistance",
        description: "Experience the wild without sacrificing comfort",
        duration: "Varies",
      },
      {
        title: "Visa Assistance",
        description:"Move with the wildlife in our exclusive mobile camps",
        duration: "5+ Days",
      },
      {
        title: "Visa Assistance",
        description: "Secluded luxury in the heart of the wilderness",
        duration: "Varies",
      }
    ],
  
  customTravelPackages: [
    {
      title: "Custom Travel Packages",
      description: "Tailor-made itineraries for Corporate Groups",
      duration: "1-2 Days",
    },
    {
      title: "Custom Travel Packages",
      description: "Tailor-made itineraries for Families && Couples",
      duration: "1 Day",
    },
    {
      title: "Custom Travel Packages",
      description: "Tailor-made itineraries for solo travelers",
      duration: "3 Days",
    }
  ],
  specialTrips: [
    {
      title: "Special Trips",
      description: "Honeymoons, destination weddings, religious pilgrimages, school trips, and more",
      duration: "1-2 Days",
    },
    {
      title: "Special Trips",
      description: "Honeymoons, destination weddings, religious pilgrimages, school trips, and more",
      duration: "1 Day",
    },
    {
      title: "Special Trips",
      description: "Honeymoons, destination weddings, religious pilgrimages, school trips, and more",
      duration: "3 Days",
    }
  ],
  tourGuidance: [
    {
      title: "Tour Guidance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus lorem, semper molestie molestie ac, lobortis non enim",
      duration: "1-2 Days",
    },
    {
      title: "Tour Guidance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus lorem, semper molestie molestie ac, lobortis non enim.",
      duration: "1 Day",
    },
    {
      title: "Tour Guidance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus lorem, semper molestie molestie ac, lobortis non enim",
      duration: "3 Days",
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
            Discover our handpicked selection of unforgettable African adventures
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
              <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-400 relative">
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