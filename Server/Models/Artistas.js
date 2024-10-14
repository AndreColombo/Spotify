import mongoose from "mongoose";

const artistasSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  profile: { type: String },
});

const artista = mongoose.model("artistas", artistasSchema);

export default artista;
