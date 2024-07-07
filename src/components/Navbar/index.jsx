import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  return (
    <div className="bg-white border-b border-gray-200 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:justify-center">
          <Link to="/" className="text-3xl font-bold text-red-600">OyeBusy</Link>
          <div className="md:hidden flex">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-red-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center space-x-8 py-4">
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
