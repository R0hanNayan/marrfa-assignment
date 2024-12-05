import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs, onCardClick }) => (
  <div>
    {blogs.map((blog) => (
      <BlogCard key={blog.id} blog={blog} onClick={onCardClick} />
    ))}
  </div>
);

export default BlogList;
