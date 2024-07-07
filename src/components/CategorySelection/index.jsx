import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data /blogData.json'

const CategorySection = ({ title, category }) => {
  const categoryPosts = blogData.filter(post => post.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-wrap -mx-4">
        {categoryPosts.map(post => (
          <div key={post.meta.canonical} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img src={post.pageData.photo.thumbnail} alt={post.pageData.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <Link to={`/blog${post.meta.canonical}`} className="text-lg font-semibold text-gray-900 hover:text-red-600">
                  {post.pageData.title}
                </Link>
                <p className="mt-2 text-gray-600">{post.meta.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
