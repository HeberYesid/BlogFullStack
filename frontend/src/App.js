// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import NewPost from "./components/NewPost";
import "./App.css";
import { db } from "./firebase"; // Importamos la instancia de Firestore

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="logo">
          Mi Blog Profesional
        </Link>
        <div className="nav-links">
          <Link to="/new" className="new-post-button">
            ✍️ Nuevo Post
          </Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<PostList db={db} />} />
          <Route path="/new" element={<NewPost db={db} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
