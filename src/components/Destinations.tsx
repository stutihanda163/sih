import React from 'react';
import { MapPin, Star, Clock, IndianRupee } from 'lucide-react';
import { destinations } from '../data/mockData';
import Modal from './ui/Modal';
import BookingForm from './forms/BookingForm';
import { useState } from 'react';

const Destinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = (destinationName: string) => {
    setSelectedDestination(destinationName);
    setIsBookingModalOpen(true);
  };

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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
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
                
                {/* Highlights overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <h4 className="font-semibold mb-2">Highlights</h4>
                    <ul className="text-sm space-y-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  {destination.price && (
                    <div className="flex items-center space-x-1 text-green-600 font-semibold">
                      <IndianRupee className="w-4 h-4" />
                      <span>{destination.price.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => handleBookNow(destination.name)}
                  >
                    Book Now
                  </button>
                  <button className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    View Details
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
        
        {/* Booking Modal */}
        <Modal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          title="Book Your Trip"
          size="lg"
        >
          <BookingForm
            preselectedDestination={selectedDestination}
            onSubmit={() => setIsBookingModalOpen(false)}
          />
        </Modal>
      </div>
    </section>
  );
};

export default Destinations;