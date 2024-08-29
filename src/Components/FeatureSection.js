import React from "react";

const FeatureSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 mt-10">
      <div className="mb-2 flex justify-center">
        <span
          className="px-6 py-2 text-sm font-semibold squared-full border-2 border-[#FBD0E1] rounded"
          style={{
            background:
              "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
            color: "#FFFFFF",
          }}
        >
          CORE FEATURES
        </span>
      </div>
      <h1
        className="text-2xl font-bold mb-8 p-2 text-transparent bg-clip-text text-center"
        style={{
          background: "linear-gradient(90deg, #8CA8BE 0%, #325098 100%)",
          WebkitBackgroundClip: "text",
        }}
      >
        Main Features Of Our Platform
      </h1>

      {/* AI Integration Section */}
      <div className="flex flex-col md:flex-row bg-white overflow-hidden mb-8 rounded-lg">
        <div className="w-full md:w-1/2 h-full">
          <img
            src="/image1.png"
            alt="AI Integration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-left">
          <h1
            className="text-xl font-semibold mb-2 p-2 text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            AI Integration
          </h1>
          <h4 className="mb-3 p-2" style={{ color: "#8CA8BE" }}>
            Advanced AI for Market Trend Analysis
          </h4>
          <p className="text-gray-500 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            lectus eu lacus varius dapibus vel eget odio. Cras ut lorem vitae
            ligula commodo efficitur.
          </p>
          <p className="text-gray-500">
            Curabitur ac tortor ut ipsum facilisis aliquet. Donec vel felis a
            eros faucibus consequat in at libero. Praesent ac turpis a sapien
            ullamcorper malesuada.
          </p>
        </div>
      </div>

      {/* Analytics Tools Section */}
      <div className="flex flex-col md:flex-row bg-white overflow-hidden mb-8 rounded-lg">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center md:pr-8 text-left">
          <h1
            className="text-xl font-semibold mb-2 p-2 text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Analytics Tools
          </h1>
          <h4 className="mb-3 p-2" style={{ color: "#8CA8BE" }}>
            Comprehensive Analytics Tools
          </h4>
          <p className="text-gray-500 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            lectus eu lacus varius dapibus vel eget odio. Cras ut lorem vitae
            ligula commodo efficitur.
          </p>
          <p className="text-gray-500">
            Curabitur ac tortor ut ipsum facilisis aliquet. Donec vel felis a
            eros faucibus consequat in at libero. Praesent ac turpis a sapien
            ullamcorper malesuada.
          </p>
        </div>
        <img
          src="/image2.png"
          alt="Analytics Tools"
          className="w-full md:w-1/2 h-auto md:h-auto object-cover rounded-lg"
        />
      </div>

      {/* Real Estate Insights Section */}
      <div className="flex flex-col md:flex-row bg-white overflow-hidden rounded-lg">
        <img
          src="/image3.png"
          alt="Real Estate Insights"
          className="w-full md:w-1/2 h-auto md:h-auto object-cover rounded-lg"
        />
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center md:pl-8 text-left">
          <h1
            className="text-xl font-semibold mb-2 p-2 text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Real Estate Insights
          </h1>
          <h4 className="mb-3 p-2" style={{ color: "#8CA8BE" }}>
            Actionable Real Estate Insights
          </h4>
          <p className="text-gray-500 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            lectus eu lacus varius dapibus vel eget odio. Cras ut lorem vitae
            ligula commodo efficitur.
          </p>
          <p className="text-gray-500">
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
