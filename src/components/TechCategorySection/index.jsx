import React from 'react';
import PostCard from '../PostCard';

const TechCategorySection = ({ posts }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Others</h2>
    {posts.slice(0, 2).map(post => (
      <div key={post.meta.canonical} className="mb-6">
        <PostCard post={post} />
      </div>
    ))}
  </div>
);

export default TechCategorySection;
