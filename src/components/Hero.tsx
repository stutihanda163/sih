import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/nmcXIrL820Q?autoplay=1&mute=1&loop=1&playlist=nmcXIrL820Q&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
          title="Jharkhand Tourism Video"
          className="w-full h-full object-cover scale-150 -translate-y-20"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.77777778vh',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '100vw',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            zIndex: -1
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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

      {/* Watch Full Video Button */}
      <div className="absolute bottom-20 right-8 z-20">
        <a
          href="https://youtu.be/nmcXIrL820Q"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          aria-label="Watch full video on YouTube"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>Watch Full Video</span>
        </a>
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