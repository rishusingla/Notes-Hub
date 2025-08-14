require("dotenv").config(); // Load env variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// // ✅ Debug: check if URI is loaded correctly
// console.log("✅ MONGO_URI:", process.env.MONGO_URI);

app.use(cors());
// const notesRoutes = require("./routes/notesRoute");
// app.use("/api/notes", notesRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const notesRoutes = require("./routes/notesRoute");
app.use("/api/notes", notesRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // ✅ serve uploaded files

// ✅ Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// ✅ Note model
const Note = require("./models/Note"); // adjust path

// ✅ Route to upload
app.post("/api/notes", upload.single("file"), async (req, res) => {
  const { title, subject, semester, branch } = req.body;
  const fileUrl = req.file ? `/uploads/${req.file.filename}` : "";

  try {
    const newNote = new Note({
      title,
      subject,
      semester,
      branch,
      fileUrl,
      uploadedAt: new Date(),
    });
    const saved = await newNote.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save note" });
  }
});

app.get("/api/notes", async (req, res) => {
  const notes = await Note.find().sort({ uploadedAt: -1 });
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
