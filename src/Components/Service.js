import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="mb-2 flex justify-center">
        <span
          className="px-6 py-2 text-sm font-semibold squared-full"
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
        className="text-2xl font-semibold mt-4 mb-4 p-2 text-transparent bg-clip-text text-center mt-10"
        style={{
          background:
            "linear-gradient(91.21deg, #8CA8BE 15.19%, #325098 99.73%)",
          WebkitBackgroundClip: "text",
        }}
      >
        HOW OUR PLATFORM WORKS
      </h1>
      <p
        className="text-base font-semibold mb-8 p-2 text-transparent bg-clip-text text-center"
        style={{
          color: "#332D4F",
          fontWeight: 400,
        }}
      >
        Lorem ipsum dolor sit amet,libero consectetur elit. <br lang="en"></br>
        Integer nec odio. Praesent libero. Sed cursus dapibus diam
      </p>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/feature4.png"
            alt="An illustration of a city in hand, representing our platform's capabilities"
            className="rounded-lg shadow-lg"
            style={{ height: "500px" }} // Add this line to increase the height of the image
          />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h3
            className="text-2xl font-semibold mb-4"
            style={{
              background:
                "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Best Service <span>For You</span>.
          </h3>
          <p className="text-gray-500 mt-10 text-[#332D4F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            urna nec nulla volutpat facilisis. Fusce egestas nulla ante in
            posuere, ac efficitur elit faucibus. Sed et perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laud.
          </p>
          <ul className="list-disc list-inside mt-10 mb-6">
            <li key="predictive-analytics" className="mb-2">
              <button className="text-[#325098]">Predictive Analytics</button>
            </li>
            <li key="future-value-insights" className="mb-2">
              <button className="text-[#325098]">Future Value Insights</button>
            </li>
            <li key="investment-opportunities" className="mb-2">
              <button className="text-[#325098]">
                Investment Opportunities
              </button>
            </li>
          </ul>
          <button className="bg-[#332D4F] text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
