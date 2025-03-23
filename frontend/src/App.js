// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import NewPost from "./components/NewPost";
import "./App.css";

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
          <Route path="/" element={<PostList />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
