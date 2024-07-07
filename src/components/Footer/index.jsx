import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialMediaLinks = {
  facebook: 'https://facebook.com/your-profile',
  twitter: 'https://twitter.com/your-profile',
  linkedin: 'https://linkedin.com/in/your-profile',
  instagram: 'https://instagram.com/your-profile',
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-red-500">OyeBusy</h1>
          <p>Order a Service</p>
        </div>
        <ul className="flex justify-center space-x-4 mb-4">
          <li><a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a></li>
          <li><a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a></li>
          <li><a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a></li>
          <li><a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a></li>
        </ul>
        <div className="text-sm mb-4">
          <a href="/" className="text-gray-400 hover:text-white">Home</a> &middot;
          <a href="/category/fashion" className="text-gray-400 hover:text-white">DIY</a> &middot;
          <a href="/category/technology" className="text-gray-400 hover:text-white">Electrician</a> &middot;
          <a href="/category/lifestyle" className="text-gray-400 hover:text-white">Television</a> &middot;
          <a href="/category/environment" className="text-gray-400 hover:text-white">Cleaning</a>
        </div>
        <p className="text-sm text-gray-500">Copyright © 2024 OyeBusy</p>
      </div>
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
        aria-label="Scroll to top"
      >
        <span className="block w-4 h-4 transform rotate-45 border-t-2 border-l-2 border-white" />
      </button>
    </footer>
  );
};

export default Footer;
