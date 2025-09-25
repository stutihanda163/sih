import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                alt="Jharkhand Tourism" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Jharkhand Tourism</h3>
                <p className="text-sm text-gray-400">The Land of Forests</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover the untamed beauty of Jharkhand - from pristine waterfalls to rich tribal culture, 
              experience the heart of India's mineral-rich paradise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#destinations" className="text-gray-300 hover:text-white transition-colors duration-200">Popular Destinations</a></li>
              <li><a href="#attractions" className="text-gray-300 hover:text-white transition-colors duration-200">Top Attractions</a></li>
              <li><a href="#culture" className="text-gray-300 hover:text-white transition-colors duration-200">Culture & Heritage</a></li>
              <li><a href="#adventure" className="text-gray-300 hover:text-white transition-colors duration-200">Adventure Tourism</a></li>
              <li><a href="#plan" className="text-gray-300 hover:text-white transition-colors duration-200">Plan Your Trip</a></li>
            </ul>
          </div>

          {/* Tourism Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Tourism Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Hotel Bookings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Tour Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Travel Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Transportation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Permits & Guidelines</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Jharkhand Tourism Development Corporation</p>
                  <p className="text-gray-400 text-sm">HEC Complex, Dhurwa, Ranchi - 834004</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">+91-651-2446781</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">info@jharkhnadtourism.gov.in</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-400"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Jharkhand Tourism Development Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;