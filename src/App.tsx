import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Categories from './components/Categories';
import TourPackages from './components/TourPackages';
import FeaturedAttractions from './components/FeaturedAttractions';
import TravelInfo from './components/TravelInfo';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Destinations />
      <Categories />
      <TourPackages />
      <FeaturedAttractions />
      <TravelInfo />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;