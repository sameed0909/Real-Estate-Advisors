import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Service from "./Components/Service.js";
import TestimonialsSection from "./Components/TestimonialsSection.js";
import AdvisorsSection from "./Components/AdvisorsSection.js";
import HeroSection from "./Components/HeroSection.js";
import Footer from "./Components/Footer.js";
import FeatureSection from "./Components/FeatureSection.js";
import PrivacyPolicy from "./Components/PrivacyPolicy.js";  // Import the Privacy Policy component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Animation will only occur once
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureSection />
              <Service />
              <TestimonialsSection />
              <AdvisorsSection />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
