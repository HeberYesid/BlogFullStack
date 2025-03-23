// components/Post.js
import React from "react";

function Post({ post }) {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span className="post-date">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default Post;
