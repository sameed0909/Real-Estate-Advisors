import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="container mx-auto text-center">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="mx-auto mb-4 w-24 h-auto"
        />

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex justify-center items-center space-x-8">
          <a href="#schedule" className="text-sm text-gray-700">
            Schedule a Call
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-700 border-b border-gray-500 pb-1"
          >
            Contact Us
          </a>
        </div>

        <div className="flex justify-center items-center space-x-6 my-4">
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
            <img src="/x-logo.svg" alt="X" className="w-6 h-6 inline" />
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

        <div className="text-sm text-gray-500">
          <a href="#terms" className="mr-2">
            Terms & Conditions
          </a>
          <a href="#privacy" className="mr-2">
            Privacy Policy
          </a>
        </div>

        <div className="text-xs text-gray-400 mt-2">
          © 2024 Company Name. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
