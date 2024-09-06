import React, { useEffect } from 'react';

const Termsconditons = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-cover bg-center">
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10">
        <div className="h-10 pl-8">
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="h-full"
          />
        </div>
        </div>
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative bg-cover bg-center mt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/hero.png')" }}>
    <header 
          className="mb-12 relative z-10 bg-opacity-100 mt-8" 
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <h1 
            className="text-4xl font-bold text-center" 
            style={{ 
              background: 'linear-gradient(89.87deg, #325098 55.75%, #FFFFFF 118.56%)', 
              WebkitBackgroundClip: 'text', 
              color: 'transparent' 
            }}
            data-aos="fade-in" 
            data-aos-duration="1500"
          >
            Terms and Conditions
          </h1>
          <p 
            className="text-lg text-center mt-4" 
            style={{ 
              padding: '1rem', 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 500,
              color: '#444853'
            }}
            data-aos="fade-in" 
            data-aos-duration="1500"
          >
            Learn more about what information we collect and how we use it.
          </p>
        </header>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row w-[95%] max-w-screen-2xl bg-white bg-opacity-90 shadow-xl rounded-lg">
        {/* Main Content with Sidebar */}
        
        <main className="w-full p-12 md:p-16 rounded-lg flex flex-col md:flex-row" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #E7F0FF)' }}>
            {/* Sidebar */}
            <nav className="md:w-1/4 md:pr-12  mt-6 space-y-14 text-lg" 
            data-aos="fade-up" 
            data-aos-duration="1000">
              <a 
                href="#type" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Type of information we collect online
              </a>
              <a 
                href="#collected" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Information that may be collected automatically
              </a>
              <a 
                href="#info-provide" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                How we use your information
              </a>
              <a 
                href="#contact" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Information we share
              </a>
              <a 
                href="#personal-data" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Children privacy
              </a>
              <a 
                href="#children-privacy" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Your privacy choices
              </a>
              <a 
                href="#privacy-choices" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Data security
              </a>
              <a 
                href="#data-security" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Third party site and social media plug-ins
              </a>
              <a 
                href="#third-party" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Contact details
              </a>
            </nav>

          {/* Content Area */}
          <div className="md:w-3/4">
            <section id="type" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Type of information we collect online
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitr.
              </p>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitr.
              </p>
            </section>

            <section id="info-provide" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Information You Provide
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam, in tempus eros velit non eros.
              </p>
            </section>

            <section id="personal-data" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Personal Data You Provide When Visiting *** Sites
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </section>

            <section id="collected" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Information that may be collected automatically
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula.              </p>
            </section>

            <section id="address" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                IP Address
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, 
              nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, 
              eros nec rhoncus tristique, est nunc vehicula quam, in tempus eros velit non eros.              </p>
            </section>

            <section id="cookies" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Cookies and other Tracking Technologies 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam, in tempus eros velit non eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula.              
              </p>
            </section>

            <section id="information" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                How we use your information 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.              
              </p>
            </section>

            <section id="provide" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Information You Provide 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra.
               Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam.              
              </p>
            </section>

            <section id="visiting" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Personal Data You Provide When Visiting *** Sites 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, 
              nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. 
              Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam.              
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </section>

            <section id="child" className="mb-12"  data-aos="fade-up"> 
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Children Privacy 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel turpis nec libero euismod condimentum. 
              Nulla facilisi. Mauris faucibus risus eu sapien lacinia, at egestas libero tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in dui id libero fringilla eleifend. Donec sed ipsum at lacus scelerisque bibendum a ac velit. 
              Aliquam erat volutpat. Sed interdum turpis sed libero dapibus, non accumsan magna suscipit.              
              </p>

              <p className="text-lg mt-6" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Pellentesque vehicula orci non mauris gravida, a suscipit ligula elementum. Suspendisse potenti. Nulla fringilla, 
              mauris ut vulputate tincidunt, ante dolor aliquet est, a ultricies odio urna a justo. Nulla eget eros ac risus vehicula pretium. Sed euismod orci sit amet lectus ultrices gravida. Vivamus blandit ligula eu justo tincidunt, quis scelerisque sem fermentum. Donec facilisis purus id mauris tempus, vel facilisis dui auctor. 
              Curabitur auctor magna sed justo efficitur, non convallis odio pellentesque.              
              </p>
            </section>

            <section id="age" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Age Restrictions 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ante quis lorem ultricies pretium. Nulla facilisi. Vivamus et tortor venenatis, aliquam ex vitae, facilisis nulla. Proin sit amet magna elit. 
              Cras eu mi vitae nunc consectetur pretium. Curabitur auctor nec velit non facilisis.              
              </p>

            </section>

            <section id="collection" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Collection of Children’s Information 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur ligula in eros bibendum, in malesuada sem efficitur. Nulla dapibus felis ut justo convallis, sit amet posuere neque hendrerit. 
              In non nulla risus. Aliquam erat volutpat. Vestibulum vel vehicula sem.              
              </p>
            </section>

            <section id="child info" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Use of Children’s Information 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus non velit vel velit fringilla interdum ut nec eros. Aliquam eget mauris risus. Sed sollicitudin, felis at interdum gravida, nulla magna volutpat est, 
              a bibendum libero est ac enim. Duis sed dui nec purus placerat suscipit.              
              </p>
            </section>

            <section id="chocies" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Your Privacy Choices 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              LorLorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet accumsan arcu. 
              Nullam pharetra, justo vitae venenatis interdum, libero felis posuere ex, sed blandit nisi augue id sapien. Morbi malesuada, velit sit amet interdum dignissim, orci turpis porttitor orci, in gravida dui velit nec elit. Phasellus vel dignissim elit. Suspendisse potenti. Sed ultrices, 
              augue vitae fermentum bibendum, neque justo viverra arcu, ac malesuada nulla sapien ut ligula.              
              </p>
            </section>

            <section id="access" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Accessing and Updating Your Information 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet accumsan arcu. Nullam pharetra, 
              justo vitae venenatis interdum, libero felis posuere ex, sed blandit nisi augue id sapien. Morbi malesuada, velit sit amet interdum dignissim, orci turpis porttitor orci, in gravida dui velit nec elit. Phasellus vel dignissim elit. Suspendisse potenti. Sed ultrices, 
              augue vitae fermentum bibendum, neque justo viverra arcu, ac malesuada nulla sapien ut ligula.              
              </p>
            </section>

            <section id="market" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Opting Out of Marketing Communications 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac sem facilisis, volutpat nisl non, efficitur nisl. 
              Praesent aliquet, nunc in dignissim tincidunt, erat est elementum lectus, et porttitor nisl justo a urna. Sed aliquet, 
              dui sed pellentesque malesuada, nulla purus blandit ex, eu bibendum tortor nulla in libero.              
              </p>
            </section>

            <section id="manage" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                 Managing Cookies and Tracking Technologies 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dui at augue dictum dictum. Suspendisse potenti. 
              Nam interdum justo at sapien sollicitudin, id malesuada elit pharetra. 
              Nullam sit amet ex id sapien hendrerit iaculis. Nulla dapibus magna a est fermentum, ut vestibulum risus blandit.              
              </p>
            </section>

            <section id="data" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                 Data Security 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Nunc ut mauris ut libero vehicula malesuada sit amet non lacus. Etiam in tortor et felis vehicula gravida at non lorem. Aenean dapibus magna at magna scelerisque, a bibendum libero varius. Nulla facilisi. Mauris auctor ligula vel turpis luctus, et luctus mi elementum. Donec ut congue felis, 
              eget facilisis nulla. Donec scelerisque massa vel metus vulputate, a vehicula ligula suscipit              
              </p>
            </section>

            <section id="security" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                 Security Measures We Implement 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sem in urna placerat blandit. 
              Proin nec justo sit amet odio feugiat gravida. Vestibulum fringilla facilisis turpis, sed fermentum nulla. Fusce posuere ante a metus suscipit, 
              quis interdum purus volutpat. Nunc ac tellus nec arcu porttitor consequat.              
              </p>
            </section>

            <section id="security" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                  Encryption and Data Protection 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sem in urna placerat blandit. 
              Proin nec justo sit amet odio feugiat gravida. Vestibulum fringilla facilisis turpis, sed fermentum nulla. Fusce posuere ante a metus suscipit, 
              quis interdum purus volutpat. Nunc ac tellus nec arcu porttitor consequat.              
              </p>
            </section>

            <section id="practice" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                   Third-Party Security Practices 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.              
              </p>
            </section>

            <section id="third" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                  Third-Party Site and social media plug-ins 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Nunc ut mauris ut libero vehicula malesuada sit amet non lacus. Etiam in tortor et felis vehicula gravida at non lorem. Aenean dapibus magna at magna scelerisque, a bibendum libero varius. Nulla facilisi. Mauris auctor ligula vel turpis luctus, et luctus mi elementum. Donec ut congue felis, 
              eget facilisis nulla. Donec scelerisque massa vel metus vulputate, a vehicula ligula suscipit              
              </p>
            </section>

            <section id="links" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                   Links to Third-Party Websites 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="media" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                   Social Media Plug-ins and Widgets 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu quis est tincidunt vehicula. 
              Aenean convallis ligula sit amet purus aliquam malesuada. Integer a purus eu dui hendrerit tincidunt sit amet at neque. 
              Proin malesuada mauris in turpis cursus convallis. Nam auctor luctus odio nec malesuada.              
              </p>
            </section>

            <section id="share" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                   How We Share Data with Third Parties 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat arcu in lorem facilisis, 
              sit amet facilisis risus gravida. Integer in justo auctor, 
              aliquet nisi eget, egestas mi. Vivamus vitae urna scelerisque, feugiat enim vel, pretium tortor.              
              </p>
            </section>

            <section id="details" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                   Contact Details 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="reach" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                    How to Reach Us 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="support" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                    Customer Support Inquiries 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="request" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                     Contact Information for Privacy Requests 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="concerns" className="mb-12"  data-aos="fade-up">
              <h2 className="text-blue-600" style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '40px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE, #325098)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                      Reporting Privacy Concerns 
              </h2>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
    </div>
  );
}

export default Termsconditons;
