import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="new-post-form">
      <h2>Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido"
          required
        />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};
// components/NewPost.js
// Al final del archivo:
export default NewPost; // <-- Asegurar esta línea
