import React from 'react';
import PostCard from '../PostCard';

const DontMissSection = ({ posts }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Don't Miss</h2>
    {posts.map(post => (
      <PostCard key={post.meta.canonical} post={post} />
    ))}
  </div>
);

export default DontMissSection;
