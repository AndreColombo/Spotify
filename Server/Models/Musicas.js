import mongoose from "mongoose";

const musicasSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  artista: { type: String, required: true },
  capa: { type: String },
});

const musica = mongoose.model("musicas", musicasSchema);

export default musica;
