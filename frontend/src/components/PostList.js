import React, { useState, useEffect } from "react";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts");
        if (!response.ok) throw new Error("Error del servidor");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <div className="error-message">🚨 {error}</div>;

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <div className="empty-state">📭 No hay publicaciones aún</div>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}
// components/PostList.js
// Al final del archivo debe tener:
export default PostList; // <-- Esta línea debe existir
