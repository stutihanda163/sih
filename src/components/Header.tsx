import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, LogOut } from 'lucide-react';
import { navigationItems } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91-651-2446781</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@jharkhnadtourism.gov.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>Jharkhand, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
              alt="Jharkhand Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-green-800">Jharkhand Tourism</h1>
              <p className="text-xs text-gray-500">Explore the Unexplored</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-green-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium items-center" role="navigation">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <a 
                  href={item.href} 
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </div>
            ))}
            <button 
              onClick={handleLogout} 
              className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              <LogOut size={18} className="mr-1" /> Logout
            </button>
          </nav>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-2 space-y-2" role="navigation">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <a 
                  href={item.href} 
                  className="block py-2 hover:text-green-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </div>
            ))}
            <button 
              onClick={handleLogout} 
              className="flex items-center py-2 hover:text-green-600 transition-colors duration-200"
            >
              <LogOut size={18} className="mr-1" /> Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;