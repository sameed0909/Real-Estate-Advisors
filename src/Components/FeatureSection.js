import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Allow animation to happen more than once
      mirror: true, // Enable animation on scroll up
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-6 mt-20">
      <div className="mb-2 flex justify-center">
        <span
          className="px-6 py-2 text-sm font-semibold rounded"
          data-aos="fade-up" // Adding AOS effect
          style={{
            background:
              "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
            color: "#FFFFFF",
          }}
        >
          CORE FEATURES
        </span>
      </div>
      <h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-10 p-2 text-transparent bg-clip-text text-center mt-10"
        style={{
          background: "linear-gradient(90deg, #8CA8BE 0%, #325098 100%)",
          WebkitBackgroundClip: "text",
          fontWeight: 1000,
          fontFamily: "Urbanist",
          letterSpacing: 1,
        }}
        data-aos="fade-up" // Adding AOS effect
      >
        Main Features Of Our Platform
      </h2>

      {/* AI Integration Section */}
      <div
        className="flex flex-col md:flex-row bg-white overflow-hidden mb-10 rounded-lg"
        data-aos="fade-right" // Adding AOS effect
      >
        <div className="w-full md:w-1/2 p-6">
          <img
            src="/image1.png"
            alt="AI Integration"
            className="w-full h-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-left">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 p-2 text-transparent bg-clip-text -ml-2"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            AI Integration
          </h1>
          <h4
            className="mb-3 p-2 -ml-2 text-sm md:text-base lg:text-lg"
            style={{ color: "#8CA8BE" }}
          >
            Advanced AI for Market Trend Analysis
          </h4>
          <p className="text-gray-500 mb-3 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            lectus eu lacus varius dapibus vel eget odio. Cras ut lorem vitae
            ligula commodo efficitur.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            Curabitur ac tortor ut ipsum facilisis aliquet. Donec vel felis a
            eros faucibus consequat in at libero. Praesent ac turpis a sapien
            ullamcorper malesuada.
          </p>
        </div>
      </div>

      {/* Analytics Tools Section */}
      <div
        className="flex flex-col md:flex-row bg-white overflow-hidden mb-10 rounded-lg"
        data-aos="fade-left" // Adding AOS effect
      >
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center md:pr-8 text-left">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 p-2 text-transparent bg-clip-text -ml-2"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Analytics Tools
          </h1>
          <h4
            className="mb-3 p-2 text-sm md:text-base lg:text-lg -ml-2"
            style={{ color: "#8CA8BE" }}
          >
            Comprehensive Analytics Tools
          </h4>
          <p className="text-gray-500 mb-3 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            lectus eu lacus varius dapibus vel eget odio. Cras ut lorem vitae
            ligula commodo efficitur.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            Curabitur ac tortor ut ipsum facilisis aliquet. Donec vel felis a
            eros faucibus consequat in at libero. Praesent ac turpis a sapien
            ullamcorper malesuada.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <img
            src="/image2.png"
            alt="Analytics Tools"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* Real Estate Insights Section */}
      <div
        className="flex flex-col md:flex-row bg-white overflow-hidden rounded-lg mb-10"
        data-aos="fade-right" // Adding AOS effect
      >
        <div className="w-full md:w-1/2 p-6">
          <img
            src="/image3.png"
            alt="Real Estate Insights"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center md:pl-8 text-left">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 p-2 text-transparent bg-clip-text -ml-2"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Real Estate Insights
          </h1>
          <h4
            className="mb-3 p-2 text-sm md:text-base lg:text-lg -ml-2"
            style={{ color: "#8CA8BE" }}
          >
            Actionable Real Estate Insights
          </h4>
          <p className="text-gray-500 mb-3 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            lectus eu lacus varius dapibus vel eget odio. Cras ut lorem vitae
            ligula commodo efficitur.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            Curabitur ac tortor ut ipsum facilisis aliquet. Donec vel felis a
            eros faucibus consequat in at libero. Praesent ac turpis a sapien
            ullamcorper malesuada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
