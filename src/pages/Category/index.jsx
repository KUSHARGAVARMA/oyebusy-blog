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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-8 bg-gray-200 p-4 rounded">
        <h1 className="text-4xl font-bold capitalize">{formattedCategoryName}</h1>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <BlogList posts={categoryPosts} />
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <SidebarSection />
        </div>
      </div>
    </div>
  );
};



export default CategoryPage;
