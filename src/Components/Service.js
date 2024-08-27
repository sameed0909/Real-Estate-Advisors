import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/feature4.png"
            alt="City in Hand"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h3 className="text-purple-600 text-sm font-semibold uppercase mb-2">
            Our Services
          </h3>
          <h2 className="text-gray-800 text-3xl font-semibold mb-4">
            How Our <span className="text-blue-600">Platform Works</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, libero consectetur elit. Integer nec
            odio. Praesent libero. Sed cursus dapibus diam.
          </p>
          <h3 className="text-gray-800 text-2xl font-semibold mb-4">
            The Best Service <span className="text-pink-500">For You</span>.
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            urna nec nulla volutpat facilisis. Fusce egestas nulla ante in
            posuere, ac efficitur elit faucibus. Sed et perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laud.
          </p>
          <ul className="list-disc list-inside text-blue-600 mb-6">
            <li className="mb-2">Predictive Analytics</li>
            <li className="mb-2">Future Value Insights</li>
            <li className="mb-2">Investment Opportunities</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
