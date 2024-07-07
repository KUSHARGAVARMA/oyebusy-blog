import React from 'react';
import blogData from '../../data /blogData.json'
import FeaturedArticle from '../../components/FeaturedArticle';
import HotTopics from '../../components/HotTopics';
import CategorySection from '../../components/CategorySelection';
import GadgetsRecommendation from '../../components/GadgetsRecommendation';
import DontMissSection from '../../components/DontMissSection';
import PopularCategories from '../../components/PopularCategories';
import HotTopicsSection from '../../components/HotTopicSection';
import PaginatedSection from '../../components/PaginatedSection ';
import FourthComponent from '../../components/FourthComponent';
import RecentPosts from '../../components/RecentPosts';
import PopularCategory from '../../components/PopularCategory';
import TechCategorySection from '../../components/TechCategorySection';



const Home = () => {
    const featuredPost = blogData[0]; // Select the first post as the featured article
    const hotTopics = blogData.slice(1, 3); // Select the next two posts as hot topics
    const thirdSection = blogData.slice(5,15);

    // Get all categories and their posts
  const categoriesMap = {};
  blogData.forEach(post => {
    const category = post.category;
    if (!categoriesMap[category]) {
      categoriesMap[category] = [];
    }
    categoriesMap[category].push(post);
  });

  // Convert categoriesMap to an array and take first three categories
  const categories = Object.keys(categoriesMap).slice(0, 3).map(category => ({
    name: category,
    posts: categoriesMap[category].slice(0, 5), // Limit to 5 posts per category
  }));

  const dontMissPosts = blogData.slice(3, 15); // Posts for Don't Miss section
  const techPosts = blogData.filter(post => post.category === 'Others');
  const popularCategories = [...new Set(blogData.map(post => post.category))];
  const recentPosts = blogData.slice(0, 5);

  
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8"> {/* Added margin-top (mt-8) */}
       {/* First section */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-2/3 px-4">
            <FeaturedArticle post={featuredPost} />
          </div>
          <div className="w-full md:w-1/3 px-4 flex flex-col space-y-6">
            {hotTopics.map(post => (
              <HotTopics key={post.meta.canonical} post={post} />
            ))}
          </div>
        </div>
        {/* End of first section */}
        
        {/* Second Section */}
        <HotTopicsSection/>
        
        <PaginatedSection title="Hot Topics" posts={thirdSection} />

        <FourthComponent categories={categories} />

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 px-4">
          <DontMissSection posts={dontMissPosts} />
          
        </div>
        <div className="w-full md:w-1/3 px-4">
          <TechCategorySection posts={techPosts} />
          <PopularCategory categories={popularCategories} />
          <RecentPosts posts={recentPosts} />
        </div>
      </div>

      </div>
    );
  };
  
  export default Home;