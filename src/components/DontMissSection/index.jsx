import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data /blogData.json'

const DontMissSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleLoadMore = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex + 4 >= blogData.length ? 0 : prevStartIndex + 4
    );
  };

  const dontMissPosts = blogData.slice(startIndex, startIndex + 12);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Don't Miss</h2>
      <div className="flex flex-col space-y-6">
        {dontMissPosts.map((post) => (
          <div key={post.meta.canonical} className="w-full">
            <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
              <Link to={`/blog${post.meta.canonical}`} className="w-full md:w-1/3 h-48 overflow-hidden">
                <img
                  src={post.pageData.photo.thumbnail}
                  alt={post.pageData.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col justify-between">
                <Link to={`/blog${post.meta.canonical}`} className="text-lg font-semibold text-gray-900 hover:text-red-600">
                  {post.pageData.title}
                </Link>
                <p className="mt-2 text-gray-600">{post.meta.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          className="bg-red-500 text-white py-2 px-4 mt-4"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default DontMissSection;
