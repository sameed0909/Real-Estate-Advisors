import React, { useEffect } from 'react';

const Termsconditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed Logo */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-10 bg-white z-50"> {/* Increased padding */}
        <div className="h-16 pl-9 -mt-3">
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/pierlogohd.png`}
            alt="Logo"
            className="h-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 relative min-h-screen w-full flex flex-col justify-center items-center mt-20 px-6 sm:px-10 lg:px-16" 
           style={{ backgroundImage: "url('/hero.png')" }}> {/* Increased padding */}
        <header 
          className="mb-12 relative z-10 bg-opacity-100 mt-8" 
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <h1 
            className="text-4xl font-bold text-center" 
            style={{ 
              background: 'linear-gradient(89.87deg, #FFFFFF -50.75%, #325098 70%)', 
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
              color: '#444853',
            }}
            data-aos="fade-in" 
            data-aos-duration="1500"
          >
            Learn more about what information we collect and how we use it.
          </p>
        </header>

        <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-screen-2xl bg-white bg-opacity-90 shadow-xl rounded-lg">
          {/* Main Content with Sidebar */}
          <main className="flex flex-col lg:flex-row w-full p-8 lg:p-20 bg-gradient-to-b from-white to-[#E7F0FF] rounded-lg "> {/* Increased padding */}
            {/* Sidebar */}
            <nav className="w-full lg:w-1/4 lg:pr-20 mt-6 lg:mt-16 p-8 lg:p-10 space-y-14 text-lg flex-shrink-0 lg:sticky lg:top-48 lg:h-[calc(100vh-12rem)] lg:overflow-y-auto"
              data-aos="fade-up" 
              data-aos-duration="1000">
              <a 
                href="#heading1" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Type of information we collect online
              </a>
              <a 
                href="#heading2" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Information that may be collected automatically
              </a>
              <a 
                href="#heading3" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                How we use your information
              </a>
              <a 
                href="#heading4" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Information we share
              </a>
              <a 
                href="#heading5" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Children privacy
              </a>
              <a 
                href="#heading6" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Your privacy choices
              </a>
              <a 
                href="#heading7" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Data security
              </a>
              <a 
                href="#heading8" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Third party site and social media plug-ins
              </a>
              {/* <a 
                href="#third-party" 
                className="block hover:text-blue-600" 
                style={{  
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 700, 
                  color: '#325098', 
                }}>
                Contact details
              </a> */}
            </nav>
            
            {/* Content Area */}
            <div className="flex-1 lg:w-3/4 lg:pl-10 p-8 lg:p-16"> {/* Increased padding */}

              <section id="heading1" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                  Type of information we collect online
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins', color: '#325098', fontWeight: 400, fontSize: '16px'}}>
                  We collect various types of information from and about users of our website and services, including:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>Personal identifiers (e.g., name, address, email address, phone number)</li>
                <li>Financial information (e.g., payment details for services)</li>
                <li>Professional or employment-related information</li>
                <li>Real estate preferences and search history</li>
              </ul>
              </section>

            {/* <section id="info-provide" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Information You Provide
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: 16 }}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam, in tempus eros velit non eros.
              </p>
            </section> */}

            {/* <section id="personal-data" className="mb-12"  data-aos="fade-up"> 
                <h1 className="text-blue-600"  style={{ 
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700, 
                  fontSize: '36px', 
                  lineHeight: '70px', 
                  letterSpacing: '2%', 
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                Personal Data You Provide When Visiting *** Sites
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:16 }}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </section> */}

            <section id="heading2" className="mb-12" data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Information That May Be Collected Automatically
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:16 }}>
              When you visit our website or use our online services, we may automatically collect certain information about your equipment, 
              browsing actions, and patterns, including:             
               </p>
               <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Time zone setting and location</li>
                <li>Pages viewed and links clicked</li>
                <li>Date and time stamps of visits</li>
                <li>Referring website addresses</li>
              </ul>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:16 }}>
              We collect this data using cookies, web beacons, and other similar technologies.             
               </p>
            </section>

            {/* <section id="address" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                IP Address
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:16 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, 
              nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, 
              eros nec rhoncus tristique, est nunc vehicula quam, in tempus eros velit non eros.              </p>
            </section> */}

            {/* <section id="cookies" className="mb-12"  data-aos="fade-up" >
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Cookies and other Tracking Technologies 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:16 }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam, in tempus eros velit non eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Integer venenatis, nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula.              
              </p>
            </section> */}

            <section id="heading3" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                How We Use Your Information 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
              We use the information we collect about you or that you provide to us, including any personal information:              
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>To provide and improve our real estate advisory services</li>
                <li>To process transactions and send related information</li>
                <li>To send promotional communications about our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To personalize your website experience and deliver content relevant to your interests</li>
                <li>To analyze website usage and optimize our marketing efforts</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section id="heading4" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Information We Share 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
              We may disclose aggregated information about our users without restriction. We may share your personal information with:              
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>Service providers and contractors who perform services on our behalf</li>
                <li>Real estate partners to facilitate transactions or services you've requested</li>
                <li>Legal and regulatory authorities, as required by applicable laws</li>
                <li>Potential buyers or investors in the event of a business transaction like a merger or acquisition</li>
              </ul>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
              We do not sell your personal information to third parties.              
              </p>
            </section>

            {/* <section id="visiting" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Personal Data You Provide When Visiting *** Sites 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer venenatis, 
              nisl sit amet volutpat vehicula, libero sem cursus libero, nec vehicula tortor felis nec nulla. Morbi id nulla nec nunc condimentum viverra. 
              Proin sollicitudin, eros nec rhoncus tristique, est nunc vehicula quam.              
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </section> */}

            <section id="heading5" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Children Privacy 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
              If you are under 13, please do not provide any information on this website.              
              </p>
            </section>

            {/* <section id="age" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Age Restrictions 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ante quis lorem ultricies pretium. Nulla facilisi. Vivamus et tortor venenatis, aliquam ex vitae, facilisis nulla. Proin sit amet magna elit. 
              Cras eu mi vitae nunc consectetur pretium. Curabitur auctor nec velit non facilisis.              
              </p>

            </section> */}

            {/* <section id="collection" className="mb-12" data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Collection of Children’s Information 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:"16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur ligula in eros bibendum, in malesuada sem efficitur. Nulla dapibus felis ut justo convallis, sit amet posuere neque hendrerit. 
              In non nulla risus. Aliquam erat volutpat. Vestibulum vel vehicula sem.              
              </p>
            </section>

            <section id="child info" className="mb-12" data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Use of Children’s Information 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus non velit vel velit fringilla interdum ut nec eros. Aliquam eget mauris risus. Sed sollicitudin, felis at interdum gravida, nulla magna volutpat est, 
              a bibendum libero est ac enim. Duis sed dui nec purus placerat suscipit.              
              </p>
            </section> */}

            <section id="heading6" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Your Privacy Choices 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              You have several choices regarding the use of information on our services:              
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-800"  style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                <li>Tracking Technologies: You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent</li>
                <li>Promotional Offers: You can opt-out of receiving promotional emails by following the unsubscribe link in each email.</li>
                <li>Access and Correction: You can review and change your personal information by logging into your account or contacting us directly.</li>
                <li>Do Not Track Signals: We currently do not respond to "do not track" signals from web browsers</li>
              </ul>
            </section>

            {/* <section id="access" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Accessing and Updating Your Information 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet accumsan arcu. Nullam pharetra, 
              justo vitae venenatis interdum, libero felis posuere ex, sed blandit nisi augue id sapien. Morbi malesuada, velit sit amet interdum dignissim, orci turpis porttitor orci, in gravida dui velit nec elit. Phasellus vel dignissim elit. Suspendisse potenti. Sed ultrices, 
              augue vitae fermentum bibendum, neque justo viverra arcu, ac malesuada nulla sapien ut ligula.              
              </p>
            </section>

            <section id="market" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                Opting Out of Marketing Communications 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac sem facilisis, volutpat nisl non, efficitur nisl. 
              Praesent aliquet, nunc in dignissim tincidunt, erat est elementum lectus, et porttitor nisl justo a urna. Sed aliquet, 
              dui sed pellentesque malesuada, nulla purus blandit ex, eu bibendum tortor nulla in libero.              
              </p>
            </section>

            <section id="manage" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                 Managing Cookies and Tracking Technologies 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dui at augue dictum dictum. Suspendisse potenti. 
              Nam interdum justo at sapien sollicitudin, id malesuada elit pharetra. 
              Nullam sit amet ex id sapien hendrerit iaculis. Nulla dapibus magna a est fermentum, ut vestibulum risus blandit.              
              </p>
            </section> */}

            <section id="heading7" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                 Data Security 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, 
              alteration, and disclosure. However, 
              the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our website.              
              </p>
            </section>

            {/* <section id="security" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                 Security Measures We Implement 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sem in urna placerat blandit. 
              Proin nec justo sit amet odio feugiat gravida. Vestibulum fringilla facilisis turpis, sed fermentum nulla. Fusce posuere ante a metus suscipit, 
              quis interdum purus volutpat. Nunc ac tellus nec arcu porttitor consequat.              
              </p>
            </section> */}

            {/* <section id="security" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                  Encryption and Data Protection 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400,fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sem in urna placerat blandit. 
              Proin nec justo sit amet odio feugiat gravida. Vestibulum fringilla facilisis turpis, sed fermentum nulla. Fusce posuere ante a metus suscipit, 
              quis interdum purus volutpat. Nunc ac tellus nec arcu porttitor consequat.              
              </p>
            </section>

            <section id="practice" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                   Third-Party Security Practices 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.              
              </p>
            </section> */}

            <section id="heading8" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                  Third-Party Site and social media plug-ins 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400,fontSize:'16px' }}>
              Our website may contain links to third-party websites or include social media features. 
              These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. However, 
              we seek to protect the integrity of our site and welcome any feedback about these sites.              
              </p>
            </section>

            {/* <section id="links" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                   Links to Third-Party Websites 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize : '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section> */}

            {/* <section id="media" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                   Social Media Plug-ins and Widgets 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu quis est tincidunt vehicula. 
              Aenean convallis ligula sit amet purus aliquam malesuada. Integer a purus eu dui hendrerit tincidunt sit amet at neque. 
              Proin malesuada mauris in turpis cursus convallis. Nam auctor luctus odio nec malesuada.              
              </p>
            </section> */}

            {/* <section id="share" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                   How We Share Data with Third Parties 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat arcu in lorem facilisis, 
              sit amet facilisis risus gravida. Integer in justo auctor, 
              aliquet nisi eget, egestas mi. Vivamus vitae urna scelerisque, feugiat enim vel, pretium tortor.              
              </p>
            </section> */}

            {/* <section id="details" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                   Contact Details 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="reach" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                    How to Reach Us 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section> */}
{/* 
            <section id="support" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                    Customer Support Inquiries 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="request" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                     Contact Information for Privacy Requests 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section>

            <section id="concerns" className="mb-12"  data-aos="fade-up">
            <h1 className="text-blue-600"  style={{ 
                    // fontFamily: 'Urbanist', 
                    fontWeight: 700, 
                    fontSize: '36px', 
                    lineHeight: '70px', 
                    letterSpacing: '2%', 
                    background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent' 
                  }}>
                      Reporting Privacy Concerns 
              </h1>
              <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize:'16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros ac nisi tempus, 
              ac dignissim justo efficitur. Quisque lacinia, arcu quis facilisis aliquet, enim orci tempus ex, a condimentum tortor augue non magna. 
              Suspendisse vel lectus eget neque tempor varius. Phasellus eget aliquam magna, vel luctus magna.              
              </p>
            </section> */}

          </div>
        </main>
      </div>
    </div>
    </div>
  );
}

export default Termsconditions;
