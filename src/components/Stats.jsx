// src/components/Stats.jsx
import React from 'react';
import { FaGlobeAfrica, FaUserFriends, FaStar, FaCalendarAlt } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: <FaGlobeAfrica className="text-3xl text-amber-500" />, value: "150+", label: "Countries" },
    { icon: <FaUserFriends className="text-3xl text-amber-500" />, value: "5000+", label: "Satisfied Travelers" },
    { icon: <FaStar className="text-3xl text-amber-500" />, value: "98%", label: "Positive Reviews" },
    { icon: <FaCalendarAlt className="text-3xl text-amber-500" />, value: "10+", label: "Years of Experience" }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Why Travelers Choose Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-6"></div>
            <p className="text-gray-300 mb-8">
             With over a decade of experience. Safari Trips custom-designs each journey to match your style, budget, and travel dreams.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="bg-white h-64 rounded-xl overflow-hidden group relative"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(https://source.unsplash.com/random/600x800/?safari,${item})` 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold">Adventure</h3>
                    <p className="text-sm text-amber-200">View Tour</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;