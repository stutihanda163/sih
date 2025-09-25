import React from 'react';
import { MapPin, Star, Clock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Netarhat",
    description: "The Queen of Chotanagpur, famous for sunrise and sunset views",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.8,
    duration: "2-3 Days",
    category: "Hill Station"
  },
  {
    id: 2,
    name: "Hundru Falls",
    description: "Spectacular 320ft waterfall on the Subarnarekha river",
    image: "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.6,
    duration: "1 Day",
    category: "Waterfall"
  },
  {
    id: 3,
    name: "Betla National Park",
    description: "Wildlife sanctuary home to tigers, elephants, and deer",
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.7,
    duration: "2-3 Days",
    category: "Wildlife"
  },
  {
    id: 4,
    name: "Deoghar",
    description: "Sacred city with the famous Baidyanath Jyotirlinga temple",
    image: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.9,
    duration: "2 Days",
    category: "Religious"
  },
  {
    id: 5,
    name: "Parasnath Hills",
    description: "Highest peak in Jharkhand, sacred to Jains",
    image: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.5,
    duration: "1-2 Days",
    category: "Trekking"
  },
  {
    id: 6,
    name: "Ranchi",
    description: "Capital city with Rock Garden and Tagore Hill",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.4,
    duration: "2-3 Days",
    category: "City"
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breathtaking beauty of Jharkhand's most captivating destinations, 
            from misty hills to thundering waterfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;