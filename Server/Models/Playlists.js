import mongoose from "mongoose";

const playlistsSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  capa: { type: String },
});

const playlist = mongoose.model("playlists", playlistsSchema);

export default playlist;
