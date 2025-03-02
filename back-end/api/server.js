import db from "./connect.js";
import express from "express";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = 3001;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../front-end/dist/index.html")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.get("/api/", (req, res) => {
  res.send('Trabalhamos somente com os caminhos "/api/artists" e "/api/songs"');
});

app.get("/api/artists", async (req, res) => {
  res.send(await db.collection("artists").find().toArray());
});

app.get("/api/songs", async (req, res) => {
  res.send(await db.collection("songs").find().toArray());
});
