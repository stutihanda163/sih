import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Categories from './components/Categories';
import TourPackages from './components/TourPackages';
import FeaturedAttractions from './components/FeaturedAttractions';
import TravelInfo from './components/TravelInfo';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Destinations />
      <Categories />
      <TourPackages />
      <FeaturedAttractions />
      <TravelInfo />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />
          <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;