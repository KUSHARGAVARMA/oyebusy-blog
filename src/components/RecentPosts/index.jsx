import React from 'react';
import PostCard from '../PostCard';

const RecentPosts = ({ posts }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Recent</h2>
    {posts.map(post => (
      <div key={post.meta.canonical} className="mb-6">
        <PostCard post={post} />
      </div>
    ))}
  </div>
);

export default RecentPosts;
