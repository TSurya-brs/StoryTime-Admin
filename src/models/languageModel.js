import mongoose from "mongoose";

const languageSchema = mongoose.Schema({
  name: { type: String },
  code: { type: String },
  languageId: { type: String },
});

const Language = mongoose.model("Languages", languageSchema);

export default Language;
