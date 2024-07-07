import React from 'react';
import { Link } from 'react-router-dom';

const HotTopics = ({ post }) => {
  if (!post) return null;
  const modifiedTime = post.meta['article:modified_time'] || post.meta.modified_time;

  return (
    <div className="relative overflow-hidden rounded-md shadow-md h-full transform transition-transform hover:scale-105">
      <Link to={`/blog${post.meta.canonical}`} className="w-full h-full">
        <img
          src={post.pageData.photo.thumbnail}
          alt={post.pageData.title}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <Link to={`/category/${post.category.toLowerCase()}`} className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">
          {post.category}
        </Link>
        <Link to={`/blog${post.meta.canonical}`} className="block mt-2 text-lg font-semibold text-white hover:text-red-600">
          {post.pageData.title}
        </Link>
        <div className="text-gray-300 mt-2 text-sm">
          <span>{post.pageData.author}</span> &middot; <span>{new Date(modifiedTime).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default HotTopics;
