import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-cover bg-center" style={{ backgroundImage: "url('/images/privacy.png')" }}>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #325098, #FFFFFF)', WebkitBackgroundClip: 'text' }}>
          Privacy Policy
        </h1>
        <p className="text-lg text-center mt-4" style={{ backgroundColor: '#FFFFFF', padding: '1rem', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
          Learn more about what information we collect and how we use it.
        </p>
      </header>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl w-full bg-white bg-opacity-90 shadow-xl rounded-lg">
        
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-12 bg-white bg-opacity-95 rounded-lg" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #E7F0FF)' }}>
  <nav className="space-y-6 text-lg" style={{ fontFamily: 'Urbanist, sans-serif', color: '#325098' }}>
    <a href="#type" className="block hover:text-blue-600">Type of information we collect online</a>
    <a href="#info-provide" className="block hover:text-blue-600">Information You Provide</a>
    <a href="#personal-data" className="block hover:text-blue-600">Personal Data You Provide</a>
    <a href="#children-privacy" className="block hover:text-blue-600">Children's Privacy</a>
    <a href="#privacy-choices" className="block hover:text-blue-600">Your Privacy Choices</a>
    <a href="#data-security" className="block hover:text-blue-600">Data Security</a>
    <a href="#third-party" className="block hover:text-blue-600">Third-Party Sharing</a>
    <a href="#contact" className="block hover:text-blue-600">Contact Details</a>
  </nav>
</aside>


        {/* Main Content */}
        <main className="w-full md:w-3/4 p-12 md:p-16 rounded-lg" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #E7F0FF)' }}>
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
            <ul className="list-disc list-inside mt-4 text-gray-800">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </section>
          
          {/* Add more sections as needed */}
          
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
