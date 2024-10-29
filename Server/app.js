import express from "express";
import cors from "cors";
import connectDb from "./db.js";
import artista from "./Models/Artistas.js";
import musica from "./Models/Musicas.js";
import playlist from "./Models/Playlists.js";
import section from "./Models/Sections.js";

const app = express();
app.use(cors());
const conexao = await connectDb();

conexao.on("error", (erro) => {
  console.error("Erro ao conectar no MongoDB", erro);
});

conexao.once("open", () => {
  console.log("Conectado no MongoDB");
});

app.get("/artistas", async (req, res) => {
  const listaArtistas = await artista.find({});
  res.status(200).json(listaArtistas);
});

app.get("/musicas", async (req, res) => {
  const listaMusicas = await musica.find({});
  res.status(200).json(listaMusicas);
});

app.get("/playlists", async (req, res) => {
  const listaPlaylists = await playlist.find({});
  res.status(200).json(listaPlaylists);
});

app.get("/sections", async (req, res) => {
  const listaSections = await section.find({});
  res.status(200).json(listaSections);
});

app.listen(3000, () => {
  console.log("Servidor conectado");
});
