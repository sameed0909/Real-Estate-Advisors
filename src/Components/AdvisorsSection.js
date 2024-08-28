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
      <div className="mb-2 flex justify-center">
      <span
  className="px-6 py-2 text-sm font-semibold squared-full justify-center"
  style={{
    background:"linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
    alignItems: "center",
    color: "#FFFFFF"
  }}
  >
    OUR ADVISOR
    </span>
    </div>
    <h1
        className="text-2xl font-bold mb-8 p-2 text-transparent bg-clip-text text-center"
        style={{
          background:"linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
          WebkitBackgroundClip: "text",
        }}
      >
        Meet Our Advisor
      </h1>
      <p className="text-gray-500 mb-6 text-center -mt-6">
            Lorem ipsum dolor sit amet, libero consectetur elit. <br></br>Integer nec
            odio. Praesent libero. Sed cursus dapibus diam.
      </p>
      <div className="container mx-auto">
        {/* Section Title */}

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
          <div className="mt-6 lg:mt-0 lg:w-1/3 lg:ml-8 p-6">
          <h1 className="text-2xl font-bold mb-8 p-2 text-transparent bg-clip-text text-left"
          style={{background: "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
            WebkitBackgroundClip: "text",
            }}>
              Why Our Advisor Stand Out
              </h1>
            <p className="mt-4 text-gray-600 -mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lacus ut lacus varius dapibus vel eget odio. Cras ut lorem vitae ligula commodo efficitur.
            </p>
            <p className="mt-4 text-gray-600">
              Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a eros feugiat consequat in at libero.
            </p>
            <button className="mt-6 text-white font-bold py-2 px-6 squared"
  style={{
    backgroundColor: "#332D4F",
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = "#2A2542"}
  onMouseOut={(e) => e.target.style.backgroundColor = "#332D4F"}
>
  Read More
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
