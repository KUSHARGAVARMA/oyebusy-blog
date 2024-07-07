import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedArticle = ({ post }) => {
  const modifiedTime = post.meta['article:modified_time'] || post.meta.modified_time;

  return (
    <div className="relative overflow-hidden rounded-md shadow-md h-full">
      <div className="relative overflow-hidden">
        <img 
          src={post.pageData.photo.cover} 
          alt={post.pageData.title} 
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" 
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <Link to={`/category/${post.category.toLowerCase()}`} className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">
          {post.category}
        </Link>
        <Link to={`/blog${post.meta.canonical}`} className="block mt-2 text-3xl font-bold text-white hover:text-red-600">
          {post.pageData.title}
        </Link>
        <div className="text-gray-300 mt-2 text-sm">
          <span>{post.pageData.author}</span> &middot; <span>{new Date(modifiedTime).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
