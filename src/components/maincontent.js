import { useState } from "react";

function MainContent() {
  const [blogs, setBlogs] = useState([
    {
      title: "Introduction",
      author: "Sagar Gurung",
      content: "My journey on this earth...",
      id: 1,
    },
    {
      title: "My first day at school",
      author: "Sagar Gurung",
      content:
        "I never wanted to go to school just like any other child but...",
      id: 2,
    },
    {
      title: "Life without parents",
      author: "Sagar Gurung",
      content: "I left my parents at the age of 7...",
      id: 3,
    },

    {
      title: "Life in Dehradun",
      author: "Sagar Gurung",
      content: "Staying in Dehradun without my parents wasn't easy...",
      id: 3,
    },
  ]);
  return (
    <div className="content">
      {blogs.map((blog) => (
        <div className="blog-preview" id={blog.id}>
          <h2>{blog.title}</h2>
          <h5>written by {blog.author}</h5>
          <br />
          <p>
            {blog.content} <a href="/">Read More</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
