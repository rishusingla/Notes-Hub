// models/Note.js
// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema({
//   title: String,
//   subject: String,
//   semester: String,
//   branch: String,
//   fileUrl: String,
//   uploadedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Note", noteSchema);

// models/Note.js
const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  semester: String,
  branch: String,
  fileUrl: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
