import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaginatedSection = ({ title, posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of posts per page

  const handleNextPage = () => {
    if (currentPage * pageSize < posts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentPosts = posts.slice(startIndex, startIndex + pageSize);

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap -mx-4">
        {currentPosts.map(post => (
          <div key={post.meta.canonical} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="relative overflow-hidden rounded-md shadow-md">
              <img src={post.pageData.photo.thumbnail} alt={post.pageData.title} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">{post.category}</span>
                <Link to={`/blog${post.meta.canonical}`} className="block mt-2 text-lg font-semibold text-white hover:text-red-600">
                  {post.pageData.title}
                </Link>
                <div className="text-gray-300 mt-2 text-sm">
                  <span>{post.pageData.author}</span> &middot; <span>{new Date(post.meta['article:modified_time']).toDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage * pageSize >= posts.length}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedSection;
