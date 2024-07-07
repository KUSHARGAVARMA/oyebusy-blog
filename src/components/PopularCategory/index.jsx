import React from 'react';
import { Link } from 'react-router-dom';

const PopularCategory = ({ categories }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
    <ul>
      {categories.slice(0, 7).map(category => (
        <li key={category} className="mb-2">
          <Link to={`/category/${category.toLowerCase()}`} className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PopularCategory;
