import React, { useState } from "react";

const AdvisorsSection = () => {
  const advisors = [
    {
      name: "James Thompson",
      title: "Senior Real Estate Investment Advisor",
      image: "images/advisor1.png",
      description:
        "Est peritus in investmentibus cum plus 15 annis experientiae in real estate et mercatoriis proprietatibus. James excels in strategica accessus, opportunitates lucrativas agnoscens et portfolios diversis administrans. Cum track record per investmenta praevia ultra $500 million.",
    },
    {
      name: "Alex Jordan",
      title: "Strategic Reality Partner",
      image: "images/advisor2.png",
      description:
        "Est peritus in investmentibus cum plus 15 annis experientiae in real estate et mercatoriis proprietatibus. Alex excels in strategica accessus, opportunitates lucrativas agnoscens et portfolios diversis administrans. Cum track record per investmenta praevia ultra $500 million.",
    },
    {
      name: "Taylor Morgan",
      title: "Senior Real Estate Investment Advisor",
      image: "images/advisor3.png",
      description:
        "Est peritus in investmentibus cum plus 15 annis experientiae in real estate et mercatoriis proprietatibus. Taylor excels in strategica accessus, opportunitates lucrativas agnoscens et portfolios diversis administrans. Cum track record per investmenta praevia ultra $500 million.",
    },
  ];

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <section className="py-10">
      <div className="mb-2 flex justify-center">
        <span
          className="px-6 py-2 text-sm font-semibold squared-full justify-center border-2 border-[#FBD0E1] rounded"
          style={{
            background:
              "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          OUR ADVISOR
        </span>
      </div>
      <h1
        className="text-2xl font-bold mb-8 p-2 text-transparent bg-clip-text text-center"
        style={{
          background:
                  "linear-gradient(90deg, #8CA8BE 0%, #325098 100%)",
          WebkitBackgroundClip: "text",
        }}
      >
        Meet Our Advisor
      </h1>
      <p className="text-gray-500 mb-6 text-center -mt-6">
        Lorem ipsum dolor sit amet, libero consectetur elit. <br></br>Integer
        nec odio. Praesent libero. Sed cursus dapibus diam.
      </p>
      <div className="container mx-auto pt-32">
        <div className="flex flex-col lg:flex-row justify-start items-start lg:space-x-4 space-y-6 lg:space-y-0">
          {/* Advisors Cards */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className={`relative group ${
                  index === 0 ? "w-64 h-[360px]" : "w-72 h-[450px]"
                } rounded-xl overflow-hidden shadow-lg bg-white`}
                style={{
                  transform: `translateY(${-index * 60}px)`,
                  marginRight: "1rem",
                }}
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={advisor.image}
                  alt={advisor.name}
                />
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#325098] to-[#444853] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                {/* Fixed Name and Title at Bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-opacity-60 text-white p-4">
                  <div className="font-bold text-lg">{advisor.name}</div>
                  <p className="text-sm">{advisor.title}</p>
                </div>
                {/* Hover Overlay with Detailed Description */}
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 p-4">
                  <p className="text-white text-large leading-relaxed text-center">
                    {advisor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Our Advisors Stand Out Section */}
          <div className="lg:w-1/3 p-6">
            <h1
              className="text-2xl font-bold mb-4 p-2 text-transparent bg-clip-text text-left"
              style={{
                background:
                  "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Why Our Advisors Stand Out
            </h1>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              at lacus ut lacus varius dapibus vel eget odio. Cras ut lorem
              vitae ligula commodo efficitur.
            </p>
            <p className="mt-2 text-gray-600">
              Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a
              eros feugiat consequat in at libero.
            </p>
            <button
              className="mt-4 text-white font-bold py-2 px-6 rounded"
              style={{
                background: buttonHover
                  ? "linear-gradient(90deg, #325098 0%, #444853 100%)"
                  : "#332D4F",
              }}
              onMouseOver={() => setButtonHover(true)}
              onMouseOut={() => setButtonHover(false)}
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