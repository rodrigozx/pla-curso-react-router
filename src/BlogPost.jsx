import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogpost = blogdata?.find((post) => post.slug === slug);

  const returnToBlog = () => navigate("/blog"); //navigate(-1) // in this case is the same as navigate("/blog")

  return (
    <>
      <h1>{blogpost.title}</h1>
      <button onClick={returnToBlog}>Volver a los Blogs</button>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </>
  );
}

export default BlogPost;
