import React from 'react';
import { Link } from 'react-router-dom';

const FourthComponent = ({ categories }) => {
  return (
    <div className="my-8">
      <div className="flex flex-wrap -mx-4">
        {categories.map(category => (
          <div key={category.name} className="w-full md:w-1/3 px-4 mb-8">
            <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
            {category.posts.map(post => (
              <div key={post.meta.canonical} className="flex items-start mb-4">
                <img
                  src={post.pageData.photo.thumbnail}
                  alt={post.pageData.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <Link to={`/blog${post.meta.canonical}`} className="text-lg font-semibold hover:text-red-600">
                    {post.pageData.title}
                  </Link>
                  <div className="text-gray-500 text-sm mt-1">
                    <span>{post.pageData.author}</span> &middot; <span>{new Date(post.meta['article:modified_time']).toDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthComponent;
