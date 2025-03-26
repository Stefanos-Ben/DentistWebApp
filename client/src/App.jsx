import './App.css'
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import HomePage from './pages/HomePage'
import ServiceDetails from './pages/ServiceDetails'




function App() {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // animation duration in ms
      once: false,    // whether animation should happen only once
    });
  }, []);

  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<HomePage />} />

      {/* Service details route */}
      <Route path="/services/:id" element={<ServiceDetails />} />
    </Routes>
  );
}

export default App
