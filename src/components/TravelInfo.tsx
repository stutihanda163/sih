import React from 'react';
import { Plane, Brain as Train, Car, MapPin, Calendar, Sun, Umbrella } from 'lucide-react';

const TravelInfo: React.FC = () => {
  return (
    <section id="plan" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Plan Your Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know to make your Jharkhand adventure unforgettable. 
            From transportation to weather insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* How to Reach */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">How to Reach Jharkhand</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">By Air</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ranchi's Birsa Munda Airport connects to major cities like Delhi, Mumbai, Kolkata, 
                    and Bangalore with regular flights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-green-600 p-3 rounded-full">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">By Rail</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ranchi, Dhanbad, and Jamshedpur are major railway junctions with excellent 
                    connectivity to all parts of India.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-orange-600 p-3 rounded-full">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">By Road</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Well-connected by national highways. State buses and private operators 
                    provide regular services from neighboring states.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather & Best Time */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Weather & Best Time to Visit</h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Sun className="w-6 h-6 text-white" />
                  <h4 className="text-xl font-semibold">Summer (March - June)</h4>
                </div>
                <p className="text-orange-100 mb-2">Temperature: 25°C - 42°C</p>
                <p className="text-orange-100">Hot and dry. Good for indoor attractions and hill stations like Netarhat.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Umbrella className="w-6 h-6 text-white" />
                  <h4 className="text-xl font-semibold">Monsoon (July - September)</h4>
                </div>
                <p className="text-blue-100 mb-2">Temperature: 22°C - 32°C</p>
                <p className="text-blue-100">Perfect for waterfalls. Heavy rainfall makes the landscape lush and green.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                  <h4 className="text-xl font-semibold">Winter (October - February)</h4>
                </div>
                <p className="text-green-100 mb-2">Temperature: 8°C - 25°C</p>
                <p className="text-green-100">Ideal time to visit. Pleasant weather perfect for all outdoor activities.</p>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Travel Tips</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Book accommodations in advance during peak season</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Carry comfortable trekking shoes for waterfall visits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Respect local customs and tribal traditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;