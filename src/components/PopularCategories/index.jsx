import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data /blogData.json';

const categoriesCount = {};
blogData.forEach(post => {
  if (categoriesCount[post.category]) {
    categoriesCount[post.category] += 1;
  } else {
    categoriesCount[post.category] = 1;
  }
});

const popularCategories = Object.entries(categoriesCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 4);

const recentPosts = blogData.slice(0, 4);

const PopularCategories = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Popular Categories</h2>
      <ul className="mb-8">
        {popularCategories.map(([category, count]) => (
          <li key={category} className="text-gray-900">
            {category} ({count})
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Recent</h2>
      <ul>
        {recentPosts.map(post => (
          <li key={post.meta.canonical} className="text-gray-900 mb-4">
            <div>
              <img src={post.pageData.photo.thumbnail} alt={post.pageData.title} className="w-full h-20 object-cover rounded-md" />
              <Link to={`/blog${post.meta.canonical}`} className="text-lg font-semibold text-gray-900 hover:text-red-600">
                {post.pageData.title}
              </Link>
              <p className="text-gray-600">{post.meta.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCategories;
