import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Categories from './components/Categories';
import FeaturedAttractions from './components/FeaturedAttractions';
import TravelInfo from './components/TravelInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Destinations />
      <Categories />
      <FeaturedAttractions />
      <TravelInfo />
      <Footer />
    </div>
  );
}

export default App;