import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./Components/Service.js";
import TestimonialsSection from "./Components/TestimonialsSection.js";
import AdisorsSection from "./Components/AdvisorsSection.js";
import HeroSection from "./Components/HeroSection.js";
import Footer from "./Components/Footer.js";
import FeatureSection from "./Components/FeatureSection.js";
import PrivacyPolicy from "./Components/PrivacyPolicy.js";  // Import the Privacy Policy component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
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
              <AdisorsSection />
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
