import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Best Movies of 2024",
      date: "June 27, 2024",
      content: "2024 has been an amazing year for movies. Here are our top picks..."
    },
    {
      title: "Upcoming TV Shows to Watch",
      date: "June 20, 2024",
      content: "There are several exciting TV shows set to release soon. Here's what to watch out for..."
    },
    {
      title: "Interview with Director John Doe",
      date: "June 15, 2024",
      content: "We sat down with John Doe to talk about his latest movie..."
    }
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
