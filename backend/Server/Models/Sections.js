import mongoose from "mongoose";

const sectionsSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  section: { type: String, required: true },
  name: { type: String, required: true },
  criador: { type: String },
  capa: { type: String },
});

const section = mongoose.model("sections", sectionsSchema);

export default section;
