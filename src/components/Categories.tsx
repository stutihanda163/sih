import React from 'react';
import { Mountain, Waves, Camera, TreePine, Compass, Heart } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Adventure Tourism",
    description: "Trekking, rock climbing, and jungle safaris",
    icon: Mountain,
    image: "https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    color: "bg-orange-500"
  },
  {
    id: 2,
    name: "Waterfall Tours",
    description: "Stunning cascades and natural pools",
    icon: Waves,
    image: "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "Heritage Sites",
    description: "Ancient temples and historical monuments",
    icon: Camera,
    image: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Wildlife Sanctuaries",
    description: "National parks and wildlife reserves",
    icon: TreePine,
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    color: "bg-green-500"
  },
  {
    id: 5,
    name: "Eco Tourism",
    description: "Sustainable travel and nature conservation",
    icon: Compass,
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    color: "bg-teal-500"
  },
  {
    id: 6,
    name: "Cultural Experience",
    description: "Tribal culture and traditional festivals",
    icon: Heart,
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    color: "bg-red-500"
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tourism Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your perfect adventure from our diverse range of tourism experiences 
            tailored to every traveler's passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{category.description}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;