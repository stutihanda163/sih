import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Jharkhand Forest Landscape"
            className="w-full h-full object-cover"
          />
        </video>
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

      {/* Video Controls (Optional) */}
      <div className="absolute bottom-20 right-8 z-20">
        <button 
          onClick={() => {
            const video = document.querySelector('video');
            if (video) {
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          aria-label="Play/Pause video"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
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