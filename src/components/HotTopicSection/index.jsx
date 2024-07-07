import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data /blogData.json'


const HotTopicsSection = () => {
  const mainHotTopic = blogData[4]; // Select a single post for the main hot topic
  const otherHotTopics = blogData.slice(5, 9); // Select the next four posts for links
  const categoryPost = blogData.find(post => post.category === "Cleaning"); // Select a post for a category
  const diyPost = blogData.find(post => post.category === "DIY");

  return (
    <div className="my-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 px-4">
          <h2 className="text-3xl font-bold mb-4">Hot Topics</h2>
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="relative overflow-hidden rounded-md shadow-md h-full transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
                <img src={mainHotTopic.pageData.photo.cover} alt={mainHotTopic.pageData.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <span className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">{mainHotTopic.category}</span>
                  <Link to={`/blog${mainHotTopic.meta.canonical}`} className="block mt-2 text-lg font-semibold text-white hover:text-red-600">
                    {mainHotTopic.pageData.title}
                  </Link>
                  <div className="text-gray-300 mt-2 text-sm">
                    <span>{mainHotTopic.pageData.author}</span> &middot; <span>{new Date(mainHotTopic.meta['article:modified_time']).toDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="grid grid-cols-1 gap-4">
                {otherHotTopics.map(post => (
                  <div key={post.meta.canonical} className="relative overflow-hidden rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
                    <Link to={`/blog${post.meta.canonical}`} className="block">
                      <div className="bg-white p-4 h-full">
                        <h3 className="text-sm font-semibold text-gray-900">{post.pageData.title}</h3>
                        <div className="text-gray-600 text-xs mt-1">
                          <span>{post.pageData.author}</span> &middot; <span>{new Date(post.meta['article:modified_time']).toDateString()}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-3xl font-bold mb-4">{categoryPost.category}</h2>
          {categoryPost && (
            <div className="relative overflow-hidden rounded-md shadow-md mb-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
              <img src={categoryPost.pageData.photo.cover} alt={categoryPost.pageData.title} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">{categoryPost.category}</span>
                <Link to={`/blog${categoryPost.meta.canonical}`} className="block mt-2 text-lg font-semibold text-white hover:text-red-600">
                  {categoryPost.pageData.title}
                </Link>
                <div className="text-gray-300 mt-2 text-sm">
                  <span>{categoryPost.pageData.author}</span> &middot; <span>{new Date(categoryPost.meta['article:modified_time']).toDateString()}</span>
                </div>
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold mb-2">DIY</h3>
          {diyPost && (
            <div className="relative overflow-hidden rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
              <img src={diyPost.pageData.photo.cover} alt={diyPost.pageData.title} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded">{diyPost.category}</span>
                <Link to={`/blog${diyPost.meta.canonical}`} className="block mt-2 text-lg font-semibold text-white hover:text-red-600">
                  {diyPost.pageData.title}
                </Link>
                <div className="text-gray-300 mt-2 text-sm">
                  <span>{diyPost.pageData.author}</span> &middot; <span>{new Date(diyPost.meta['article:modified_time']).toDateString()}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotTopicsSection;

  
