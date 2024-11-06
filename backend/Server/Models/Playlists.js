import mongoose from "mongoose";

const playlistsSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  capa: { type: String },
  criador: { type: String },
  musicas: { type: Number },
  album: { type: String },
  adicionado: { type: String },
});

const playlist = mongoose.model("playlists", playlistsSchema);

export default playlist;
