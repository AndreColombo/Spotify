import mongoose from "mongoose";

const genresSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  capa: { type: String },
  cor: { type: String },
});

const genre = mongoose.model("genres", genresSchema);

export default genre;
