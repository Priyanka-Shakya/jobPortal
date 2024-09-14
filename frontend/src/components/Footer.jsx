import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4m0 0L10 18l-4-4L2 20l4-4 12-12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4m0 0L10 18l-4-4L2 20l4-4 12-12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h4v4m0 0L10 18l-4-4L2 20l4-4 12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
