import React from 'react'
import SpecialMenus from './../Componants/Utalities/SpecialMenus';
import Allblogs from "./../Componants/Utalities/blogs";
const BlogsPage = () => {
  return (
    <div className="font">
      <SpecialMenus name="All Blogs" />
      <Allblogs />
    </div>
  );
}

export default BlogsPage