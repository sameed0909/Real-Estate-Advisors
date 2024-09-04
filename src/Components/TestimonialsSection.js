import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Note: You'll need to install react-slick and its CSS:
// npm install react-slick slick-carousel
// Then import the CSS in your main App.js or index.js:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ name, role, image, rating, text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start text-left mb-10 mt-10 border border-inherit">
    <div className="flex items-center space-x-4 mb-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="text-gray-800 text-lg font-semibold">{name}</h3>
        <p className="text-blue-600 text-sm">{role}</p>
      </div>
    </div>
    <div className="flex items-center mb-4">
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
      <span className="ml-2 text-black text-sm font-medium">{rating}</span>
    </div>
    <p className="text-gray-500 text-sm">{text}</p>
  </div>
);

const TestimonialsSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings with 5-second autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 5 seconds
  };

  const testimonials = [
    {
      name: "Ahmed",
      role: "UI/UX Designer",
      image: "/images/avatar1.png",
      rating: "5.00",
      text: "As a UI/UX Designer, I specialize in crafting seamless and engaging user experiences through thoughtful design. My role encompasses understanding user needs, creating user-centered designs, and ensuring that each interface is both visually appealing and highly functional.",
    },
    {
      name: "Alizey",
      role: "Front End Developer",
      image: "/images/avatar2.png",
      rating: "5.00",
      text: "As a Front End Developer, I turn design concepts into fully functional, visually engaging websites and applications. My expertise lies in creating responsive, user-friendly interfaces that provide an exceptional user experience across all devices.",
    },
    {
      name: "Fatima",
      role: "Graphic Designer",
      image: "/images/avatar3.png",
      rating: "5.00",
      text: "As a Graphic Designer, I specialize in creating compelling visual content that enhances brand identity and engages audiences. My role involves transforming ideas into striking graphics that communicate messages clearly and effectively.",
    },
    {
      name: "Ali",
      role: "Marketing Manager",
      image: "/images/avatar4.png",
      rating: "5.00",
      text: "As a Marketing Manager, my role is to develop and execute innovative marketing strategies that drive brand awareness, engagement, and revenue growth. I focus on crafting compelling campaigns, analyzing market trends, and leveraging various channels.",
    },
    {
      name: "Sara",
      role: "Web Developer",
      image: "/images/avatar5.png",
      rating: "5.00",
      text: "As a Web Developer, I focus on creating and maintaining high-performance websites and applications that deliver seamless user experiences. My expertise spans both front-end and back-end development, ensuring that every aspect of a web project.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-2 flex justify-center">
            <span
              className="px-6 py-2 text-[22px] font-semibold font-urbanist rounded-[4px]"
              style={{
                background:
                  "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
                color: "#FFFFFF",
              }}
            >
              12K+ HAPPY CLIENTS
            </span>
          </div>
          <h2
            className="text-3xl font-semibold mt-10 leading-tight px-4 md:px-0"
            style={{
              background: "linear-gradient(91.21deg, #8CA8BE 35.19%, #325098 99.73%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span
              className="block md:inline"
              style={{
                letterSpacing: 1,
                fontFamily: "Urbanist",
                fontWeight: 1000,
              }}
            >
              Testimonials 
              <br className="md:hidden" />
              <span className="text-blue-600"> And Success Stories</span>
            </span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
