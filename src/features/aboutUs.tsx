import {
  FaMountain,
  FaGlobeAfrica,
  FaUmbrellaBeach,
  FaTree,
  FaCamera,
} from "react-icons/fa";

const AboutUs = () => {
  // Sample images - in a real app, replace with your actual image imports
  const images = [
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 ">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Discover the World with Safari Trips
              </h3>

              <p className="text-gray-600 mb-6">
               At Safari Trips, we think that travel is much more than just a way to get from one place to another; it's a life-changing event, a compilation of remarkable tales, and a wealth of memories that will last a lifetime. Our agency was established by a group of enthusiastic travelers who shared a passion for travel and cultural exchange with the single objective of revolutionizing the way people see the world.
              </p>

              <p className="text-gray-600 mb-8">
 <strong>Why Pick Safari Trips? </strong> 
  <li>🌍 More than a decade of experience providing customized travel options for corporate, family, group, and individual customers</li>
  <li>✈ All-inclusive travel services, such as reservations for hotels, flights, guided tours, help with visas, and concierge services</li>
  <li>🤝 Trustworthy international alliances that guarantee seamless coordination across locations</li>
  <li>💼 Professionalism in Corporate and Leisure Travel to satisfy both personal and professional demands</li>
  <li>🌳  Africa-based, with a strong local perspective and global reach</li>
                </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <FaMountain className="text-3xl text-gray-900 mb-2" />
                  <span className="font-bold">200+</span>
                  <span className="text-sm text-gray-600">Destinations</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaGlobeAfrica className="text-3xl text-gray-900 mb-2" />
                  <span className="font-bold">50+</span>
                  <span className="text-sm text-gray-600">Countries</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUmbrellaBeach className="text-3xl text-gray-900 mb-2" />
                  <span className="font-bold">10k+</span>
                  <span className="text-sm text-gray-600">Travelers</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaTree className="text-3xl text-gray-900 mb-2" />
                  <span className="font-bold">15+</span>
                  <span className="text-sm text-gray-600">Years</span>
                </div>
              </div>

              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-500 transition-colors font-bold flex items-center mx-auto">
                Our Mission <FaCamera className="ml-2" />
              </button>
            </div>
          </div>

          {/* Circular Image Gallery */}
          <div className="lg:w-1/2 relative h-[500px] flex items-center justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Center Circle */}
              <div className="absolute inset-0 bg-amber-500/10 rounded-full flex items-center justify-center animate-pulse-slow">
                <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center shadow-xl">
                  <div className="text-amber-500 text-center">
                    <FaCamera className="text-4xl mx-auto mb-2" />
                    <span className="font-bold">Safari</span>
                    <span className="block font-light">Moments</span>
                  </div>
                </div>
              </div>

              {/* Rotating Images */}
              {images.map((img, index) => {
                const angle = index * 72; // 72° between each image (360/5)
                const radius = 180; // Distance from center
                const radian = (angle * Math.PI) / 180;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                  <div
                    key={index}
                    className="absolute w-32 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white transform transition-all duration-500 hover:scale-110 hover:z-10"
                    style={{
                      left: `calc(50% + ${x}px - 64px)`,
                      top: `calc(50% + ${y}px - 64px)`,
                      transform: `rotate(${angle + 15}deg)`,
                      zIndex: index + 1,
                    }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
