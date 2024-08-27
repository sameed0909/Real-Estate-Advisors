import React from 'react';

const AdvisorsSection = () => {
  const advisors = [
    {
      name: 'James Thompson',
      title: 'Senior Real Estate Investment Advisor',
      image: 'images/advisor1.png', // Relative path from public folder
    },
    {
      name: 'Alex Jordan',
      title: 'Strategic Reality Partner',
      image: 'images/advisor2.png', // Relative path from public folder
    },
    {
      name: 'Taylor Morgan',
      title: 'Senior Real Estate Investment Advisor',
      image: 'images/advisor3.png', // Relative path from public folder
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Meet Our Advisors</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, libero consectetur elit. Integer nec odio.
          </p>
        </div>

        {/* Main Flex Container for Images and Text */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          {/* Advisors Cards */}
          <div className="flex flex-wrap lg:w-2/3">
            {advisors.map((advisor, index) => (
              <div key={index} className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
                <img className="w-full h-64 object-cover" src={advisor.image} alt={advisor.name} />
                
                {/* Overlay text inside the image */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                  <div className="font-bold text-lg">{advisor.name}</div>
                  <p className="text-sm">{advisor.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Our Advisors Stand Out Section */}
          <div className="mt-6 lg:mt-0 lg:w-1/3 lg:ml-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">Why Our Advisors Stand Out</h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lacus ut lacus varius dapibus vel eget odio. Cras ut lorem vitae ligula commodo efficitur.
            </p>
            <p className="mt-4 text-gray-600">
              Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a eros feugiat consequat in at libero.
            </p>
            <button className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
