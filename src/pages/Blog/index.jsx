import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data /blogData.json';

const Blog = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.meta.canonical.includes(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.pageData.title}</h1>
      <img src={post.pageData.photo.cover} alt={post.pageData.title} />
      <div dangerouslySetInnerHTML={{ __html: post.pageData.content }} />
    </div>
  );
};

export default Blog;
