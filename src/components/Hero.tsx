import React from 'react';
import { MapPin, Calendar, Users, Play, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlan = () => {
    document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full scale-110"
          src="https://www.youtube.com/embed/nmcXIrL820Q?autoplay=1&mute=1&loop=1&playlist=nmcXIrL820Q&controls=0&showinfo=0&modestbranding=1"
          title="Discover Jharkhand"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in">
        <div className="mb-6">
          <span className="inline-block bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Welcome to the Land of Forests
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Jharkhand</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-gray-100 max-w-3xl mx-auto">
          Experience the untamed beauty of India's mineral-rich heartland. 
          From lush forests to sacred waterfalls, <span className="text-green-300 font-semibold">adventure awaits</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={scrollToDestinations}
            className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-green-500/25"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Explore Destinations</span>
              <MapPin className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button 
            onClick={scrollToPlan}
            className="group border-2 border-white/80 hover:bg-white hover:text-gray-800 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none hover:shadow-2xl"
          >
            <span className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5 group-hover:text-green-600 transition-colors duration-300" />
              <span>Plan Your Trip</span>
            </span>
          </button>
        </div>

        {/* Watch Video Button */}
        <div className="mb-16">
          <a
            href="https://youtu.be/nmcXIrL820Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Watch Full Video</span>
          </a>
        </div>
            Explore Destinations
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Plan Your Trip
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 lg:p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">24 Districts</h3>
            <p className="text-gray-200 text-sm lg:text-base">Diverse landscapes to explore</p>
          </div>
          
          <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 lg:p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Year Round</h3>
            <p className="text-gray-200 text-sm lg:text-base">Perfect weather anytime</p>
          </div>
          
          <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 lg:p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
            <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Rich Culture</h3>
            <p className="text-gray-200 text-sm lg:text-base">Tribal heritage & traditions</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToDestinations}>
        <div className="animate-bounce hover:animate-pulse transition-all duration-300">
          <div className="w-8 h-12 border-2 border-white/80 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm hover:border-green-400 hover:bg-white/10 transition-all duration-300">
            <ChevronDown className="w-4 h-4 text-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;