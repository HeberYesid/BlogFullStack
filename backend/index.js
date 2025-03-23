const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const PORT = process.env.PORT || 3001;

const app = express();
//esto es un middleware que nos permite recibir y enviar datos en formato JSON
app.use(cors());
app.use(express.json());

// Configuración de SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Modelo Post
const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

// Rutas
app.get("/posts", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// Iniciar servidor
(async () => {
  await sequelize.sync();
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  );
})();
