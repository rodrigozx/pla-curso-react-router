import React from "react";
import { Link } from "react-router-dom";
import { blogdata } from "../blogdata";

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>_
      <ul>
        {blogdata.map((post, index) => {
          return (
            <li key={index}>
              <BlogLink post={post} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return <Link to={`/blog/${post.slug}`}>{post.title}</Link>;
}

export default BlogPage;
