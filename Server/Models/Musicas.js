import mongoose from "mongoose";

const videoclipSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  capa: { type: String },
  name: { type: String, required: true },
  artista: { type: String, required: true },
});

const creditoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  artista: { type: String, required: true },
  funcao: { type: String, required: true },
});

const musicasSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  artista: { type: String, required: true },
  capa: { type: String },
  tempo: { type: String },
  videoclips: { type: [videoclipSchema] },
  creditos: { type: [creditoSchema] },
});

const musica = mongoose.model("musicas", musicasSchema);

export default musica;
