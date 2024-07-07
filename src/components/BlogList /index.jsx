import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.meta.canonical} className="mb-8">
          <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden md:h-96">
            <Link to={`/blog${post.meta.canonical}`} className="w-full md:w-1/2">
              <img 
                src={post.pageData.photo.cover} 
                alt={post.pageData.title} 
                className="w-full h-48 md:h-full object-cover"
              />
            </Link>
            <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  <Link to={`/blog${post.meta.canonical}`} className="hover:text-red-600">
                    {post.pageData.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-600 mt-2">
                  <span>{post.pageData.author}</span> &middot; <span>{new Date(post.meta['article:modified_time']).toDateString()}</span>
                </div>
                <p className="text-gray-600 mt-2">{post.meta.description}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-gray-200">
                <Link to={`/blog${post.meta.canonical}`} className="text-red-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
