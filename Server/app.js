import express from "express";
import cors from "cors";
import connectDb from "./db.js";
import artista from "./Models/artistas.js";

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

app.listen(3000, () => {
  console.log("Servidor conectado");
});
