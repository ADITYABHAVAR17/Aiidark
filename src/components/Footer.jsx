import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aii Ventures</h3>
          <p className="mb-4 text-gray-300">Empowering businesses with AI and Cloud</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a>
          </div>
          <p className="mt-8 text-gray-400">&copy; 2024 Aii Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;