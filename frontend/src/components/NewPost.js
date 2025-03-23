// components/NewPost.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        createdAt: new Date().toISOString(),
      });
      navigate("/");
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

export default NewPost;
