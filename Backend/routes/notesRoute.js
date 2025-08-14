// // routes/notesRoute.js
// const express = require("express");
// const Note = require("../models/Note");
// const router = express.Router();

// // POST - Upload Note
// router.post("/", async (req, res) => {
//   try {
//     const note = new Note(req.body);
//     await note.save();
//     res.status(201).json(note);
//   } catch (err) {
//     res.status(400).json({ error: "Failed to upload note" });
//   }
// });

// // GET - All Notes
// // router.get("/", async (req, res) => {
// //   const notes = await Note.find().sort({ uploadedAt: -1 });
// //   res.json(notes);
// // });
// router.get("/", async (req, res) => {
//   try {
//     const notes = await Note.find().sort({ uploadedAt: -1 }); // newest first
//     res.json(notes);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch notes" });
//   }
// });

// module.exports = router;
// backend/routes/notes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const Note = require("../models/Note");

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// POST /api/notes
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { title, subject, semester, branch } = req.body;
    const filePath = req.file ? req.file.path : null;

    if (!filePath) {
      return res.status(400).json({ error: "File upload failed" });
    }

    const newNote = new Note({
      title,
      subject,
      semester,
      branch,
      fileUrl: filePath, // You can store just the relative path
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.error("Error uploading note:", err);
    res.status(500).json({ error: "Failed to upload note" });
  }
});

module.exports = router;
