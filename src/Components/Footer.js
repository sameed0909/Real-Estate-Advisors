import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-6" style={{ backgroundColor: "#ECE9F7" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="mx-auto mb-4 w-24 h-auto"
        />
        <div className="border-t border-gray-300 my-4"></div>

        {/* Links for Schedule and Contact Us */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4">
          <a href="#schedule" className="text-sm text-gray" style={{ color: "#444853" }}>
            Schedule a Call
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            className="text-gray-700 text-2xl font-bold"
          >
            <img
              src="/facebook.svg"
              alt="facebook"
              className="w-6 h-6 inline"
            />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-700 text-2xl font-bold"
          >
            <img
              src="/x-logo.svg"
              alt="X"
              className="w-6 h-6 inline"
            />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-700 text-2xl font-bold"
          >
            <img
              src="/instagram.svg"
              alt="instagram"
              className="w-6 h-6 inline"
            />
          </a>
        </div>

        {/* Terms and Privacy */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-500">
          <a href="#terms" className="mr-0 sm:mr-2">
            Terms & Conditions
          </a>
          <a href="#privacy" className="mr-0 sm:mr-2">
            Privacy Policy
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-xs text-gray-400 mt-4">
          © 2024 Pier. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
