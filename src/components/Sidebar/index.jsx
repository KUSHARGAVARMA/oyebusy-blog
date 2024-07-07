import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data /blogData.json'

const SidebarSection = () => {
  const recentPosts = blogData.slice(0, 3); // Assuming the first three posts are the recent ones
  const popularPosts = blogData.slice(0, 4); // Assuming the first four posts are the popular ones
  const categories = [
    { name: 'Environment', count: 5 },
    { name: 'Fashion', count: 5 },
    { name: 'Life Style', count: 5 },
    { name: 'Technology', count: 5 },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Posts</h3>
        {recentPosts.map((post) => (
          <div key={post.meta.canonical} className="transform transition-transform hover:scale-105">
            <Link to={`/blog${post.meta.canonical}`} className="block text-gray-900 hover:text-red-600">
              <img
                src={post.pageData.photo.thumbnail}
                alt={post.pageData.title}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <span>{post.pageData.title}</span>
              <p className="text-gray-600">{new Date(post.meta['article:modified_time']).toDateString()}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.name.toLowerCase()}`}
            className="block text-gray-900 hover:text-red-600 transform transition-transform hover:scale-105"
          >
            {category.name} ({category.count} Posts)
          </Link>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Popular Posts</h3>
        {popularPosts.map((post) => (
          <div key={post.meta.canonical} className="transform transition-transform hover:scale-105">
            <Link to={`/blog${post.meta.canonical}`} className="block text-gray-900 hover:text-red-600">
              <img
                src={post.pageData.photo.thumbnail}
                alt={post.pageData.title}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <span>{post.pageData.title}</span>
              <p className="text-gray-600">{new Date(post.meta['article:modified_time']).toDateString()}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
