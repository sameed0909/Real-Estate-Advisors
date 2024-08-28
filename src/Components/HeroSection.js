import React from "react";
import "../style.css"

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10">
        <div className="h-10">
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="h-full"
          />
        </div>
        <button className="border border-white text-white px-4 py-2 squared-full shadow hover:bg-white hover:text-indigo-600 transition duration-300 btn-custom">
  Schedule a Call
</button>



      </div>

      {/* Hero Section */}
      <div
        className="flex flex-col md:flex-row p-8 mt-0 relative z-0"
        style={{ minHeight: "calc(100vh)" }}
      >
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left relative z-20 mt-16 md:mt-20">
          <div
            className="inline-block px-3 py-1 rounded-md mb-2"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              color: "#FFFFFF",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Find the best property advisor
          </div>
          <h1
            style={{
              color: "#8CA8BE",
              fontFamily: "Urbanist, sans-serif",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "60px",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            Empowering Your Real Estate Investments with{" "}
            <span
              style={{
                background:
                  "linear-gradient(89.67deg, #325098 0.1%, #FFFFFF 89.29%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              AI-Driven
            </span>{" "}
            <span style={{ color: "#325098", fontWeight: 600 }}>Insights.</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Office spaces that meet the market, Winning keywords, website
            behavioral move data instantly, real estate automation and marketing
            emails other than Interminie no ac adator board or heads-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="px-4 py-2 rounded shadow"
              style={{ backgroundColor: "#332D4F", color: "#FFFFFF" }}
            >
              Schedule a Call
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded shadow">
              Get in touch
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50k+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/5 h-full relative md:absolute top-0 right-0 w-full z-0">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png`}
            alt="Modern House"
            className="w-full h-full object-cover rounded-bl-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
