import React from "react";
import Service from "./Components/Service.js";
import TestimonialsSection from "./Components/TestimonialsSection.js";
import AdisorsSection from "./Components/AdvisorsSection.js";
import HeroSection from "./Components/HeroSection.js";
import Footer from "./Components/Footer.js";
import FeatureSection from "./Components/FeatureSection.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeatureSection />
      <Service />
      <TestimonialsSection />
      <AdisorsSection />
      <Footer />
    </div>
  );
}

export default App;
