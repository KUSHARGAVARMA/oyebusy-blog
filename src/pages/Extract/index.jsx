import React, { useEffect, useState } from 'react';
import blogData from '../../data /blogData.json'
const ExtractCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categorySet = new Set();
    blogData.forEach(post => {
      if (post.category) {
        categorySet.add(post.category);
      }
    });
    setCategories(Array.from(categorySet));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExtractCategories;
