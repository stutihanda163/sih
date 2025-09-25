import React from 'react';
import { MapPin, Clock, Camera, Info, Eye, Calendar } from 'lucide-react';
import { attractions } from '../data/mockData';
import { useState } from 'react';
import Modal from './ui/Modal';
import Slider from './ui/Slider';
import Button from './ui/Button';

const FeaturedAttractions: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const handleViewGallery = (attraction: any) => {
    setSelectedAttraction(attraction);
    setIsGalleryModalOpen(true);
  };

  return (
    <section id="attractions" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Attractions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the crown jewels of Jharkhand tourism - these carefully selected attractions 
            showcase the state's natural beauty and cultural richness.
          </p>
        </div>

        <div className="space-y-12">
          {attractions.map((attraction, index) => (
            <div 
              key={attraction.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {attraction.featured && (
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Camera className="w-4 h-4" />
                        <span>Featured</span>
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay with quick info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{attraction.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{attraction.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-lg">{attraction.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">{attraction.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="font-semibold text-gray-800">Best Time to Visit:</span>
                      <span className="ml-2 text-gray-600">{attraction.bestTime}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Info className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-800">Popular Activities:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-8">
                      {attraction.activities.map((activity, actIndex) => (
                        <span 
                          key={actIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Plan Visit
                  </button>
                  <Button
                    onClick={() => handleViewGallery(attraction)}
                    variant="outline"
                    leftIcon={<Eye className="w-5 h-5" />}
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gallery Modal */}
        <Modal
          isOpen={isGalleryModalOpen}
          onClose={() => setIsGalleryModalOpen(false)}
          title={selectedAttraction?.name || 'Gallery'}
          size="xl"
        >
          {selectedAttraction && (
            <div className="space-y-6">
              <Slider
                autoPlay={true}
                autoPlayInterval={4000}
                className="h-96"
              >
                {selectedAttraction.gallery.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedAttraction.name} - Image ${index + 1}`}
                    className="w-full h-96 object-cover"
                  />
                ))}
              </Slider>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Location:</span>
                    <span>{selectedAttraction.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Timings:</span>
                    <span>{selectedAttraction.timings}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold">Best Time:</span>
                    <span>{selectedAttraction.bestTime}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold">Entry Fee:</span>
                    <span className="ml-2">{selectedAttraction.entryFee}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold">Activities:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedAttraction.activities.map((activity: string, index: number) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {selectedAttraction.description}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default FeaturedAttractions;