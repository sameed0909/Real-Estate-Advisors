import React from 'react';
import Service from './Components/Service.js'
import TestimonialsSection from './Components/TestimonialsSection.js';
import AdisorsSection from './Components/AdvisorsSection.js'
import HeroSection from './Components/HeroSection.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Service/>
      <TestimonialsSection/>
      <AdisorsSection/>
      <Footer/>
    </div>
  );
}

export default App;
