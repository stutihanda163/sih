import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { navigationItems } from '../data/mockData';
import Dropdown from './ui/Dropdown';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
              <p className="text-sm text-gray-600">The Land of Forests</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium" role="navigation">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <Dropdown
                    trigger={<span>{item.label}</span>}
                    items={item.dropdownItems || []}
                  />
                ) : (
                  <a 
                    href={item.href} 
                    className="hover:text-green-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="lg:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-3 text-gray-700 font-medium" role="navigation">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <a 
                  href={item.href} 
                  className="block py-2 hover:text-green-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={subItem.href}
                        className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;