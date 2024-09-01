import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-full">
        <div className="mb-4 flex justify-center lg:ml-8">
          <span
            className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              color: "#FFFFFF",
            }}
          >
            OUR SERVICES
          </span>
        </div>

        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mt-4 mb-4 p-2 text-transparent bg-clip-text text-center lg:ml-8"
          style={{
            background:
              "linear-gradient(91.21deg, #8CA8BE 35.19%, #325098 99.73%)",
            WebkitBackgroundClip: "text",
          }}
        >
          HOW OUR PLATFORM WORKS
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-8 p-2 text-[#332D4F] max-w-2xl mx-auto text-center">
          Lorem ipsum dolor sit amet, libero consectetur elit.{" "}
          <br className="hidden sm:inline" />
          Integer nec odio. Praesent libero. Sed cursus dapibus diam
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:relative lg:left-0 lg:m-0 lg:p-0">
            <img
              src="/images/feature4.png"
              alt="An illustration of a city in hand, representing our platform's capabilities"
              className="w-full h-auto max-h-[800px] object-cover shadow-lg"
              style={{
                height: "auto", // Auto height to maintain aspect ratio
                borderBottomRightRadius: "50px",
              }}
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 px-4">
            <h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-semibold mb-4"
              style={{
                background:
                  "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Best Service <span>For You</span>.
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-6 lg:mt-10 text-[#332D4F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vel urna nec nulla volutpat facilisis. Fusce egestas nulla ante in
              posuere, ac efficitur elit faucibus. Sed et perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque laud.
            </p>
            <ul className="list-disc list-inside mt-6 lg:mt-10 mb-6 text-[#325098] text-sm sm:text-base md:text-lg lg:text-xl">
              <li key="predictive-analytics" className="mb-2">
                Predictive Analytics
              </li>
              <li key="future-value-insights" className="mb-2">
                Future Value Insights
              </li>
              <li key="investment-opportunities" className="mb-2">
                Investment Opportunities
              </li>
            </ul>
            <button className="bg-[#332D4F] text-white py-2 px-4 rounded-lg mt-8 lg:mt-12 hover:bg-opacity-90 transition-colors duration-300 text-sm sm:text-base md:text-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
