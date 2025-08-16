import familySunset from "../assets/images/family-sunset.jpg";
import beach from "../assets/images/Beach.png";
import touristsBox from "../assets/images/tourists-box.jpg";
import friendsTrip from "../assets/images/friends-trip.jpg";
import solo from "../assets/images/solo-Travel.jpg";
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
    familySunset,
    beach,
    touristsBox,
    friendsTrip,
    solo,
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
                About Us, Safari Trips
              </h3>

              <p className="text-gray-600 mb-6">
              At Safari Trips, we believe travel is far more than just getting from point A to point B it’s a transformative experience, a collection of unforgettable stories, and a treasure trove of lifelong memories. Born from a deep love for exploration and cultural connection,  Safari Trips was founded by a team of passionate travel enthusiasts with one goal in mind: to redefine how you experience the world.
For over a decade, we have proudly served as a trusted tour, hospitality, and travel partner, offering bespoke travel services to clients across West Africa and the global diaspora. Whether you’re planning your first journey or your fiftieth, we are committed to making every adventure unique, enriching, and worry-free

What We Offer
Our services are built on a foundation of expertise, global partnerships, and personalized care. We specialize in both inbound and outbound travel, delivering custom itineraries and tour packages that suit a wide range of preferences, budgets, and travel goals — from luxurious getaways to cultural immersions and group adventures.

              </p>

              <p className="text-gray-600 mb-8">
 <strong>Why Pick Safari Trips? </strong> 
  <li>🌍 Over 10 Years of Experience in delivering tailored travel solutions for individuals, families, groups, and corporate clients</li>
  <li>✈ Comprehensive Travel Services, including flight bookings, hotel reservations, guided tours, visa assistance, and concierge support
</li>
  <li>🤝  Reliable Global Partnerships that ensure smooth coordination across destinations
</li>
  <li>💼 Corporate and Leisure Travel Expertise to meet both business and personal needs
</li>
  <li>🌳  From the savannahs of East Africa to the streets of Paris or the beaches of Bali — wherever your dream leads, Safari Trips is your passport to a perfectly curated journey.
</li>
                </p>
<p className= "text-gray-600 mb-8">
  Explore the world. Experience the difference. Travel Hassle-free with Safari Trips.
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
