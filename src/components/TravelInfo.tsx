import React from 'react';
import { Plane, Train, Car, MapPin, Calendar, Sun, Umbrella } from 'lucide-react';
import { weatherInfo } from '../data/mockData';
import Accordion from './ui/Accordion';

const TravelInfo: React.FC = () => {
  const faqItems = [
    {
      id: 'permits',
      title: 'Do I need any permits to visit Jharkhand?',
      content: (
        <p>Most tourist destinations in Jharkhand do not require special permits. However, for certain tribal areas and wildlife sanctuaries, you may need prior permission. It's recommended to check with local authorities or your tour operator.</p>
      )
    },
    {
      id: 'safety',
      title: 'Is Jharkhand safe for tourists?',
      content: (
        <p>Jharkhand is generally safe for tourists. However, like any travel destination, it's advisable to take standard precautions, avoid isolated areas after dark, and stay informed about local conditions. Tourist areas are well-patrolled and safe.</p>
      )
    },
    {
      id: 'language',
      title: 'What languages are spoken in Jharkhand?',
      content: (
        <p>Hindi is widely spoken and understood throughout Jharkhand. English is commonly used in tourist areas, hotels, and restaurants. Local tribal languages include Santali, Mundari, and Ho, but Hindi will suffice for most tourist interactions.</p>
      )
    },
    {
      id: 'currency',
      title: 'What about money and payments?',
      content: (
        <p>Indian Rupee (INR) is the currency. ATMs are available in major cities and towns. Credit cards are accepted in hotels and restaurants in urban areas, but it's advisable to carry cash for rural areas and local markets.</p>
      )
    }
  ];
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
              {weatherInfo.map((weather, index) => (
                <div key={index} className={`p-6 bg-gradient-to-r ${weather.color} rounded-xl`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{weather.icon}</span>
                    <h4 className="text-xl font-semibold text-white">{weather.season}</h4>
                  </div>
                  <p className="text-white opacity-90 mb-2">Temperature: {weather.temperature}</p>
                  <p className="text-white opacity-90">{weather.description}</p>
                </div>
              ))}
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
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">Frequently Asked Questions</h3>
          <Accordion items={faqItems} className="max-w-4xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;