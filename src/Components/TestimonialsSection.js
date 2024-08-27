import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            12K+ HAPPY CLIENTS
          </div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            Testimonials <span className="text-blue-600">And Success Stories</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="/images/avatar1.png"
              alt="Ahmed"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-gray-800 text-lg font-semibold">Ahmed</h3>
            <p className="text-blue-600 text-sm mb-4">UI/UX Designer</p>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049.755l1.453 4.47h4.92c.363 0 .514.47.22.678l-3.978 2.884 1.453 4.47c.091.281-.237.514-.483.342l-3.978-2.884-3.978 2.884c-.246.172-.574-.061-.483-.342l1.453-4.47-3.978-2.884c-.294-.208-.143-.678.22-.678h4.92L9.049.755c.09-.278.513-.278.604 0z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="/images/avatar2.png"
              alt="Alizey"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-gray-800 text-lg font-semibold">Alizey</h3>
            <p className="text-blue-600 text-sm mb-4">Front End Developer</p>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049.755l1.453 4.47h4.92c.363 0 .514.47.22.678l-3.978 2.884 1.453 4.47c.091.281-.237.514-.483.342l-3.978-2.884-3.978 2.884c-.246.172-.574-.061-.483-.342l1.453-4.47-3.978-2.884c-.294-.208-.143-.678.22-.678h4.92L9.049.755c.09-.278.513-.278.604 0z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="/images/avatar3.png"
              alt="Fatima"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-gray-800 text-lg font-semibold">Fatima</h3>
            <p className="text-blue-600 text-sm mb-4">Graphic Designer</p>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049.755l1.453 4.47h4.92c.363 0 .514.47.22.678l-3.978 2.884 1.453 4.47c.091.281-.237.514-.483.342l-3.978-2.884-3.978 2.884c-.246.172-.574-.061-.483-.342l1.453-4.47-3.978-2.884c-.294-.208-.143-.678.22-.678h4.92L9.049.755c.09-.278.513-.278.604 0z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
