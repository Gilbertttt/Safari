import React from 'react'
import familyTravel from "../assets/images/family-traveling.jpg"
import groupTravel from "../assets/images/group-travel.jpg"
import soloTravel from "../assets/images/solo-trips.jpg"
import honeymoon from "../assets/images/honeymoon.jpg"
import parentTravel from "../assets/images/parents-travelling.jpg"
const TravelPackages = () => {
  return (
    <div>
        <section className = "py-24">
            <div className= "container mx-auto px-4 py-4">
        <h2 className="text-4xl font-bold text-center">Travel Packages</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 mb-4"></div>
        <p className="text-gray-600 mb-8 text-center ">
          Explore our exclusive travel packages designed to offer you the best experiences.
        </p>
        <div className=" mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Sample Package Card */}
          <div className=" bg-white">
            <div className="relative cursor-pointer">
                <img src={parentTravel} alt="Package 1" className="h-72 rounded-lg " />  
            <div className="absolute bottom-0 flex items-center ">
              <h3 className="text-[30px] font-semibold p-5 text-white">Parent Trips</h3>
            </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="relative cursor-pointer">
                <img src={honeymoon} alt="Package 1" className="h-72 rounded-lg " />  
            <div className="absolute bottom-0 flex items-center ">
              <h3 className="text-[30px] font-semibold p-5 text-white">Honeymoon</h3>
            </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="relative cursor-pointer">
                <img src={familyTravel} alt="Package 1" className="h-72 rounded-lg " />  
            <div className="absolute bottom-0 flex items-center ">
              <h3 className="text-[30px] font-semibold p-5 text-white">Family Holiday</h3>
            </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="relative cursor-pointer">
                <img src={groupTravel} alt="Package 1" className="h-72 rounded-lg" />  
            <div className="absolute bottom-0 flex items-center ">
              <h3 className="text-[30px] font-semibold p-5 text-white">Group Travel</h3>
            </div>
            </div>
          </div>
          <div className=" bg-white">
            <div className="relative cursor-pointer">
                <img src={soloTravel} alt="Package 1" className="h-72 rounded-lg " />  
            <div className="absolute bottom-0 flex items-center ">
              <h3 className="text-[30px] font-semibold p-5 text-white">Solo Travels</h3>
            </div>
            </div>
          </div>
          {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="" alt="Package 1" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-2">Honeymoon</h3>
              <p className="text-gray-600 mb-4"></p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">View Details</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={familyTravel} alt="Package 1" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-2">Family Holiday</h3>
              <p className="text-gray-600 mb-4"></p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">View Details</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={familyTravel} alt="Package 1" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-2">Group Travel</h3>
              <p className="text-gray-600 mb-4"></p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">View Details</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={familyTravel} alt="Package 1" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-2">Solo Travel</h3>
              <p className="text-gray-600 mb-4"></p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">View Details</button>
            </div>
          </div> */}
          {/* Add more package cards as needed */}
        </div>
      </div> 
        </section>
     
    </div>
  )
}

export default TravelPackages

