import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-cover bg-center" style={{ backgroundImage: "url('/images/privacy.png')" }}>
      <header className="mb-12 relative z-10 bg-opacity-100 mt-4">
        <h1 className="text-4xl font-bold text-center" style={{ 
          background: 'linear-gradient(89.87deg, #325098 55.75%, #FFFFFF 118.56%)', 
          WebkitBackgroundClip: 'text', 
          color: 'transparent' 
        }}>
          Privacy Policy
        </h1>
        <p className="text-lg text-center mt-4" style={{ 
          padding: '1rem', 
          fontFamily: 'Poppins, sans-serif', 
          fontWeight: 500,
          color: '#FFFFFF'  // Adjust text color if needed
        }}>
          Learn more about what information we collect and how we use it.
        </p>
      </header>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl w-full bg-white bg-opacity-90 shadow-xl rounded-lg">
        {/* Main Content with Sidebar */}
        <main className="w-full p-12 md:p-16 rounded-lg flex flex-col md:flex-row" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #E7F0FF)' }}>
            {/* Sidebar */}
            <nav className="md:w-1/4 md:pr-12  mt-6 space-y-14 text-lg">
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
            <section id="type" className="mb-12">
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

            <section id="info-provide" className="mb-12">
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

            <section id="personal-data" className="mb-12">
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
            
            {/* Add more sections as needed */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
