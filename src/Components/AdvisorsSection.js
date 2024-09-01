import React, { useState } from "react";

const AdvisorsSection = () => {
  const advisors = [
    {
      name: "James Thompson",
      title: "Senior Real Estate Investment Advisor",
      image: "images/advisor1.png",
      description:
        "Est peritus in investmentibus cum plus 15 annis experientiae in real estate et mercatoriis proprietatibus. James excels in strategica accessus, opportunitates lucrativas agnoscens et portfolios diversis administrans. Cum track record per investmenta praevia ultra $500 million.",
      link: "#", // Add link here
    },
    {
      name: "Alex Jordan",
      title: "Strategic Reality Partner",
      image: "images/advisor2.png",
      description:
        "Est peritus in investmentibus cum plus 15 annis experientiae in real estate et mercatoriis proprietatibus. Alex excels in strategica accessus, opportunitates lucrativas agnoscens et portfolios diversis administrans. Cum track record per investmenta praevia ultra $500 million.",
      link: "#", // Add link here
    },
    {
      name: "Taylor Morgan",
      title: "Senior Real Estate Investment Advisor",
      image: "images/advisor3.png",
      description:
        "Est peritus in investmentibus cum plus 15 annis experientiae in real estate et mercatoriis proprietatibus. Taylor excels in strategica accessus, opportunitates lucrativas agnoscens et portfolios diversis administrans. Cum track record per investmenta praevia ultra $500 million.",
      link: "#", // Add link here
    },
  ];

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <section className="py-10">
      <div className="mb-2 flex justify-center">
        <span
          className="px-6 py-2 text-sm font-semibold squared-full justify-center rounded"
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
          background: "linear-gradient(90deg, #8CA8BE 0%, #325098 100%)",
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
                className={`relative group w-[300px] ${
                  index === 0 ? "h-[439.13px]" : "h-[544.02px]"
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
                {/* Name and Title are fixed at bottom */}
                <div className="absolute bottom-0 left-0 w-full opacity-90 text-white p-4 z-10">
                  <div className="font-bold text-lg">{advisor.name}</div>
                  <p className="text-sm">{advisor.title}</p>
                </div>
                {/* Shutter Effect for Description */}
                <div className="absolute inset-0 flex flex-col justify-start">
                  {/* Gradient Overlay */}
                  <div className="w-full h-full flex flex-col transition-transform duration-500 ease-in-out transform group-hover:translate-y-0 -translate-y-full">
                    <div
                      className="w-full h-full flex flex-col p-4"
                      style={{
                        background: "linear-gradient(180deg, rgba(50, 80, 152, 1) 0%, rgba(68, 72, 83, 0.5) 100%)",
                      }}
                    >
                      <h2 className="text-xl font-semibold text-white mb-2 mt-4" style={{ fontFamily:"Urbanist, sans-serif" }}>
                        Investment Advisor
                      </h2>
                      <p className="text-white text-large leading-relaxed text-left">
                        {advisor.description}
                      </p>
                      {/* Learn More Link */}
                      <a
                        href={advisor.link}
                        className="text-white font-semibold mt-4 inline-block"
                      >
                        Learn More &#x2B9E;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Why Our Advisors Stand Out Section */}
          <div className="lg:w-1/3 p-4">
          <h1
    className="text-2xl font-bold mb-4 text-transparent bg-clip-text text-left"
    style={{
      background: "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
      WebkitBackgroundClip: "text",
      marginTop: "-8rem", // Adjust top margin
    }}
  >
    Why Our Advisors Stand Out
  </h1>
  <p
  style={{
    marginTop: "2rem", // Adds space above the paragraph
    fontWeight: 400, // Sets the font weight
    fontSize: "16px", // Sets the font size
    lineHeight: "30px", // Sets the line height
  }}
  className="text-gray-600"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
  at lacus ut lacus varius dapibus vel eget odio. Cras ut lorem
  vitae ligula commodo efficitur.
</p>

<p
  style={{
    marginTop: "4rem", // Adds space above the paragraph
    fontWeight: 400, // Sets the font weight
    fontSize: "16px", // Sets the font size
    lineHeight: "30px", // Sets the line height
  }}
  className="text-gray-600"
>
  Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a
  eros feugiat consequat in at libero.
</p>
  <button
  className="text-white font-bold py-2 px-6 rounded"
  style={{
    background: buttonHover
      ? "linear-gradient(90deg, rgba(50, 80, 152, 0.7) 0%, rgba(68, 72, 83, 0.7) 100%)"
      : "#332D4F",
    marginTop: "4rem", // Adjust this value as needed
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
