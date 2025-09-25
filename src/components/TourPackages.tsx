import React, { useState } from 'react';
import { Calendar, Users, Star, IndianRupee, Clock, MapPin } from 'lucide-react';
import { tourPackages } from '../data/mockData';
import Tabs from './ui/Tabs';
import Modal from './ui/Modal';
import BookingForm from './forms/BookingForm';
import Button from './ui/Button';

const TourPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState<any>(null);
  const [isItineraryModalOpen, setIsItineraryModalOpen] = useState(false);

  const handleBookPackage = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    setIsBookingModalOpen(true);
  };

  const handleViewItinerary = (packageData: any) => {
    setSelectedItinerary(packageData);
    setIsItineraryModalOpen(true);
  };

  const categories = [
    { id: 'all', label: 'All Packages', packages: tourPackages },
    { id: 'adventure', label: 'Adventure', packages: tourPackages.filter(p => p.category === 'adventure') },
    { id: 'heritage', label: 'Heritage', packages: tourPackages.filter(p => p.category === 'heritage') },
    { id: 'wildlife', label: 'Wildlife', packages: tourPackages.filter(p => p.category === 'wildlife') },
    { id: 'spiritual', label: 'Spiritual', packages: tourPackages.filter(p => p.category === 'spiritual') }
  ];

  const PackageGrid = ({ packages }: { packages: any[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative">
            <img 
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{pkg.rating}</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
              {pkg.category}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-600 font-semibold">
                  <IndianRupee className="w-4 h-4" />
                  <span>{pkg.price.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <span className="font-medium">Includes:</span> {pkg.includes.slice(0, 3).join(', ')}
                {pkg.includes.length > 3 && '...'}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button
                onClick={() => handleViewItinerary(pkg)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                View Itinerary
              </Button>
              <Button
                onClick={() => handleBookPackage(pkg.title)}
                size="sm"
                className="flex-1"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const tabItems = categories.map(category => ({
    id: category.id,
    label: category.label,
    content: <PackageGrid packages={category.packages} />
  }));

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tour Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Jharkhand with our carefully crafted tour packages. From adventure expeditions 
            to cultural journeys, find the perfect experience for your travel style.
          </p>
        </div>

        <Tabs items={tabItems} defaultTab="all" />

        {/* Booking Modal */}
        <Modal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          title="Book Tour Package"
          size="lg"
        >
          <BookingForm
            preselectedDestination={selectedPackage}
            onSubmit={() => setIsBookingModalOpen(false)}
          />
        </Modal>

        {/* Itinerary Modal */}
        <Modal
          isOpen={isItineraryModalOpen}
          onClose={() => setIsItineraryModalOpen(false)}
          title={selectedItinerary?.title || 'Package Itinerary'}
          size="xl"
        >
          {selectedItinerary && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{selectedItinerary.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600 font-semibold">
                    <IndianRupee className="w-5 h-5" />
                    <span>{selectedItinerary.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{selectedItinerary.rating}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Package Includes</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedItinerary.includes.map((item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Detailed Itinerary</h4>
                <div className="space-y-4">
                  {selectedItinerary.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-green-600 mb-2">
                        Day {day.day}: {day.title}
                      </h5>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Activities:</span>
                          <ul className="ml-4 mt-1 space-y-1">
                            {day.activities.map((activity: string, actIndex: number) => (
                              <li key={actIndex} className="text-gray-600">• {activity}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <span className="font-medium">Meals:</span>
                          <span className="ml-2 text-gray-600">{day.meals.join(', ')}</span>
                        </div>
                        
                        {day.accommodation && (
                          <div>
                            <span className="font-medium">Accommodation:</span>
                            <span className="ml-2 text-gray-600">{day.accommodation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4 border-t">
                <Button
                  onClick={() => {
                    setIsItineraryModalOpen(false);
                    handleBookPackage(selectedItinerary.title);
                  }}
                  className="flex-1"
                >
                  Book This Package
                </Button>
                <Button
                  onClick={() => setIsItineraryModalOpen(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default TourPackages;