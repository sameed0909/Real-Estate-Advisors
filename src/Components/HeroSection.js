import React, { useState, useEffect } from "react";
import "../style.css";
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleEmailInput = () => {
    setIsActive(!isActive);
  };

  const handleEmailSubmit = () => {
    // Handle email submission logic here
    toggleEmailInput();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing function
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="relative mb-4">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10" data-aos="fade-down">
        <div className="h-10 pl-8">
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="h-full"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row p-6 md:p-8 mt-0 relative z-0">
        {/* Left Section */}
        <div className="md:w-1/2 text-left relative z-20 mt-16 md:mt-20 px-4 md:px-8" data-aos="fade-up">
          <div
            className="inline-block px-3 py-1 rounded-md mb-2"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              color: "#FFFFFF",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            data-aos="fade-up" // Adding AOS effect
          >
            Find the best property advisor
          </div>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hero-heading"
            style={{
              color: "#8CA8BE",
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
            data-aos="fade-up"
          >
            Empowering Your Real Estate Investments with{" "}
            <span
              style={{
                background:
                  "linear-gradient(89.67deg, #325098 1%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              <br />
              AI-Driven
            </span>{" "}
            <span style={{ color: "#325098", fontWeight: 600 }}>Insights.</span>
          </h1>
          <p
            className="mb-6 text-sm md:text-base mt-5 lg:text-lg"
            style={{
              color: "#464646",
              fontFamily: "Poppins",
            }}
            data-aos="fade-up"
          >
            Unlock the full potential of your real estate investments with our cutting-edge AI-driven solutions. 
            Our technology provides actionable insights, predictive analytics, and market intelligence, 
            enabling you to make data-driven decisions that drive success. Whether you’re buying, selling, or managing properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            {/* Toggle Email Input */}
            <div className="relative mt-8 w-full sm:w-72 transition-all duration-300 border-2 rounded-2xl shadow p-1">
              <div
                className={`flex items-center w-full h-12 cursor-pointer transition-justify-content duration-300 `}
                onClick={toggleEmailInput}
                data-aos="fade-right" // Adding AOS effect to the toggle container
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-300 to-pink-300 flex justify-center items-center mx-1">
                  <img src={`${process.env.PUBLIC_URL}/images/sms.png`} alt="Email icon" className="w-6 h-6" />
                </div>
                  <span
                    style={{ color: '#332D4F' }}
                    className="font-bold text-sm sm:text-lg ml-4"
                  >
                    Schedule A Demo
                  </span>
                <span
                  className={`ml-auto mr-4 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
                >
                  <span
                    style={{ color: '#332D4F' }}
                    className="text-xl"
                  >
                    &gt;
                  </span>
                </span>
              </div>

              {isActive && (
                <div className="absolute top-full mt-2 w-full z-20 bg-white p-2 shadow-lg rounded-lg"> {/* Added AOS effect to the email form */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 mb-2 rounded-lg border-2 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-300 to-pink-300 p-2 font-bold text-gray-800 cursor-pointer hover:bg-gradient-to-l from-pink-300 to-blue-300 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-8 mt-8">
            <div className="text-center" data-aos="fade-up">
              <div
                className={`text-2xl ${isActive ? 'mt-24' : 'mt-8'}`} 
                style={{
                  color: "#332D4F",
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 800,
                  fontSize: "28px",
                }}
              >
                <CountUp end={50} duration={4.5} />
                K+
              </div>
              <div
                className="text-sm md:text-base lg:text-lg"
                style={{
                  color: "#464646",
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Happy Clients
              </div>
            </div>
            <div className="text-center" data-aos="fade-up">
              <div
                className={`text-2xl ${isActive ? 'mt-24' : 'mt-8'}`} 
                style={{
                  color: "#332D4F",
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                }}
              >
                <CountUp start={0} end={10} duration={4} />
                +
              </div>
              <div
                className="text-sm md:text-base lg:text-lg"
                style={{
                  color: "#464646",
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Years of Experience
              </div>
            </div>
            <div className="text-center" data-aos="fade-up">
              <div
                className={`text-2xl ${isActive ? 'mt-24' : 'mt-8'}`} 
                style={{
                  color: "#332D4F",
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                }}
              >
                <CountUp start={0} end={98} duration={1.5} suffix="%" />
              </div>
              <div
                className="text-sm md:text-base lg:text-lg"
                style={{
                  color: "#464646",
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Client Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 h-64 md:h-full relative md:absolute top-0 right-0 w-full z-0 overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png`}
            alt="Modern House"
            className="w-full h-full object-cover rounded-bl-[50px] md:rounded-bl-[70px]"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
