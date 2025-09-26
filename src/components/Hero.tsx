import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/nmcXIrL820Q?autoplay=1&mute=1&loop=1&playlist=nmcXIrL820Q&controls=0&showinfo=0&modestbranding=1"
          title="Discover Jharkhand"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover <span className="text-green-400">Jharkhand</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Experience the untamed beauty of India's mineral-rich heartland. 
          From lush forests to sacred waterfalls, adventure awaits.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Explore Destinations
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Plan Your Trip
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">24 Districts</h3>
            <p className="text-gray-200">Diverse landscapes to explore</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">Year Round</h3>
            <p className="text-gray-200">Perfect weather anytime</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">Rich Culture</h3>
            <p className="text-gray-200">Tribal heritage & traditions</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
         <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;