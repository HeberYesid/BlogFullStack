import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./Post.css";

function Post({ post }) {
  const date = new Date(post.createdAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <div className="post-date">
        <FaCalendarAlt />
        <span>{date}</span>
      </div>
    </div>
  );
}

export default Post;
