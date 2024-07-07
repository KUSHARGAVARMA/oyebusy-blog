import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import Logo from '../../data /Logo';
import blogData from '../../data /blogData.json';

const categories = [
  "Carpentry", "Television", "Cleaning", "Pest Control", "Electrician",
  "Plumbing", "Kitchen Cleaning", "Commercial Cleaning", "Sofa Cleaning",
  "Bathroom Cleaning", "Disinfection", "Air Conditioning", "Washing Machine",
  "Geyser", "Refrigeration", "Water Purification", "Microwave", "Chimney",
  "DIY", "Others"
];

const primaryCategories = categories.slice(0, 5);
const moreCategories = categories.slice(5);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  const socialMediaLinks = blogData?.social || {};

  return (
    <div className="bg-white border-b border-gray-200 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:justify-center">
          <Link to="/" className="text-3xl font-bold text-red-600"><Logo /></Link>
          <div className="md:hidden flex items-center">
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="text-gray-900 hover:text-red-600 focus:outline-none"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
  <Link to="/" className="text-gray-900 hover:text-red-600 ml-4">
    <HiOutlineSearch className="w-6 h-6" />
  </Link>
</div>

        </div>

        <div className="hidden md:flex justify-between space-x-8 py-4">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {  (
              <a href="https://www.facebook.com/oyebusyindia/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-900 hover:text-red-600" />
              </a>
            )}
            {(
              <a href="https://www.facebook.com/oyebusyindia/"target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-900 hover:text-red-600" />
              </a>
            )}
            { (
              <a href="https://www.facebook.com/oyebusyindia/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-900 hover:text-red-600" />
              </a>
            )}
            {(
              <a href='https://x.com/oyebusyindia' target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-900 hover:text-red-600" />
              </a>
            )}
          </div>

          {/* Menu Items */}
          <div className="flex justify-center space-x-8">
            <Link
              to="/"
              className={`text-gray-900 hover:text-red-600 ${location.pathname === '/' ? 'text-red-600 border-b-2 border-red-600' : ''}`}
            >
              Home
            </Link>
            {primaryCategories.map(category => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-gray-900 hover:text-red-600 ${location.pathname.includes(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`) ? 'text-red-600 border-b-2 border-red-600' : ''}`}
              >
                {category}
              </Link>
            ))}
            <div className="relative group">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-gray-900 hover:text-red-600"
              >
                More
              </button>
              {isMoreOpen && (
                <div className="absolute bg-white border border-gray-200 mt-2 rounded-md shadow-lg z-50">
                  {moreCategories.map(category => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Icon */}
          <div className="flex items-center">
            <Link to="/" className="text-gray-900 hover:text-red-600">
              <HiOutlineSearch className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          
          <div className="md:hidden">

 
            <div className="flex flex-col space-y-2 py-2">
              <Link
                to="/"
                className={`text-gray-900 hover:text-red-600 ${location.pathname === '/' ? 'text-red-600' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map(category => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-gray-900 hover:text-red-600 ${location.pathname.includes(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`) ? 'text-red-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
