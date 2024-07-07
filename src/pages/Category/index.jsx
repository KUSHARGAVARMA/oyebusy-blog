import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data /blogData.json';
import BlogList from '../../components/BlogList ';
import SidebarSection from '../../components/Sidebar';

// CategoryPage.jsx


const CategoryPage = () => {
  const { categoryName } = useParams();
  const formattedCategoryName = categoryName.replace(/-/g, ' ').toLowerCase();

  // Handle the misspelling
  const actualCategoryName = formattedCategoryName === 'carpentry' ? 'carpentery' : formattedCategoryName;

  console.log('Category Name from URL:', categoryName);
  console.log('Formatted Category Name:', formattedCategoryName);
  console.log('Actual Category Name:', actualCategoryName);

  const categoryPosts = blogData.filter(post => post.category.toLowerCase() === actualCategoryName);
  console.log('Category Posts:', categoryPosts);

  return (
    <div>
    <div className="relative overflow-hidden bg-pink-200 py-16 mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 capitalize">{formattedCategoryName}</h1>
      </div>
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 px-4">
          <BlogList posts={categoryPosts} />
        </div>
        <div className="w-full md:w-1/3 px-4">
          <SidebarSection />
        </div>
      </div>
    </div>
  </div>
  );
};



export default CategoryPage;
