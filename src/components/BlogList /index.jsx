import React from 'react';
import { Link } from 'react-router-dom';

// BlogList.jsx

// BlogList.jsx

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.meta.canonical} className="mb-8">
          <div className="flex bg-white rounded-md shadow-md overflow-hidden" style={{ height: '400px' }}>
            <Link to={`/blog${post.meta.canonical}`} className="w-1/3">
              <img src={post.pageData.photo.cover} alt={post.pageData.title} className="w-full h-full object-cover cursor-pointer" />
            </Link>
            <div className="p-4 w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900">
                <Link to={`/blog${post.meta.canonical}`} className="hover:text-red-600">{post.pageData.title}</Link>
              </h2>
              <div className="text-sm text-gray-600 mt-2">
                <span>{post.pageData.author}</span> &middot; <span>{new Date(post.meta['article:modified_time']).toDateString()}</span>
              </div>
              <p className="text-gray-600 mt-2">{post.meta.description}</p>
              <Link to={`/blog${post.meta.canonical}`} className="text-blue-600 hover:underline mt-2 block">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};






export default BlogList;
