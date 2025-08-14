import React, { useState } from "react";
import axios from "axios";
const UploadNotes = () => {
  const [noteData, setNoteData] = useState({
    title: "",
    subject: "",
    semester: "",
    branch: "",
    file: null,
  });

  const [uploadedNote, setUploadedNote] = useState(null); // ✅ show after submit
  const [showForm, setShowForm] = useState(true); // ✅ toggle form
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const handleFileChange = (e) => {
    setNoteData({ ...noteData, file: e.target.files[0] });
  };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const note = {
//     title: noteData.title,
//     subject: noteData.subject,
//     branch: noteData.branch,
//     semester: noteData.semester,
//     fileName: noteData.file?.name,
//     fileUrl: "", // leave blank if you're not uploading files yet
//   };

//   try {
//     const res = await axios.post("http://localhost:5000/api/notes", note);
//     console.log("✅ Uploaded note:", res.data);
//     alert("✅ Notes uploaded successfully!");
//   } catch (err) {
//     console.error("❌ Error uploading:", err);
//     alert("❌ Upload failed");
//   }
// };
// const handleSubmit = (e) => {
//   e.preventDefault();

//   // 1. Check file exists
//   if (!noteData.file) {
//     alert("Please upload a PDF file");
//     return;
//   }

//   // 2. Create object URL from file
//   const fileUrl = noteData.file ? URL.createObjectURL(noteData.file) : null;

//   // 3. Get old notes
//   const prevNotes = JSON.parse(localStorage.getItem("notes")) || [];

//   // 4. Create new note with fileUrl
//   const newNote = {
//     title: noteData.title,
//     subject: noteData.subject,
//     semester: noteData.semester,
//     branch: noteData.branch,
//     fileName: noteData.file?.name,
//   fileUrl: fileUrl,              // ✅ Add this line
//   uploadedAt: new Date().toISOString(),
//   };

//   // 5. Save to localStorage
//   localStorage.setItem("notes", JSON.stringify([newNote, ...prevNotes]));

//   // 6. Show success
//   setSuccessMessage("✅ Notes uploaded successfully!");
//   setUploadedNote(newNote);
//   setShowForm(false);

//   // 7. Reset form
//   setNoteData({
//     title: "",
//     subject: "",
//     semester: "",
//     branch: "",
//     file: null,
//   });
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Check file exists
  if (!noteData.file) {
    alert("Please upload a PDF file");
    return;
  }

  // 2. Prepare the payload
 
  const formData = new FormData();
  formData.append("title", noteData.title);
  formData.append("subject", noteData.subject);
  formData.append("semester", noteData.semester);
  formData.append("branch", noteData.branch);
  formData.append("file", noteData.file);

  try {
    const res = await axios.post("http://localhost:5000/api/notes", formData);
    console.log("✅ Uploaded to backend:", res.data);
    setSuccessMessage("✅ Notes uploaded to backend!");
    setUploadedNote(res.data);
    setShowForm(false);
  } catch (err) {
    console.error("❌ Error uploading:", err);
    alert("❌ Upload failed");
  }

  // 3. Reset form
  setNoteData({
    title: "",
    subject: "",
    semester: "",
    branch: "",
    file: null,
  });
};


  const handleUploadAgain = () => {
    setShowForm(true);
    setSuccessMessage("");
    setUploadedNote(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        📤 Upload Your Notes
      </h2>

      {/* ✅ Uploaded Message + Note Preview */}
      {!showForm && uploadedNote && (
        <div className="text-center space-y-4">
          <div className="text-green-600 font-semibold">
            {successMessage}
          </div>
          {/* <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-left shadow">
            <p><strong>📄 Title:</strong> {uploadedNote.title}</p>
            <p><strong>📘 Subject:</strong> {uploadedNote.subject}</p>
            <p><strong>📚 Semester:</strong> {uploadedNote.semester}</p>
            <p><strong>🏷️ Branch:</strong> {uploadedNote.branch}</p>
            <p><strong>📎 File:</strong> {uploadedNote.file?.name}</p>
          </div> */}
          <button
            onClick={handleUploadAgain}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Upload Another Note
          </button>
        </div>
      )}

      {/* ✅ Upload Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Note Title</label>
            <input
              type="text"
              name="title"
              value={noteData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={noteData.subject}
              onChange={handleChange}
              placeholder="e.g. Data Structures"
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Semester</label>
            <select
              name="semester"
              value={noteData.semester}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600"
              required
            >
              <option value="">Select Semester</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Semester {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Branch</label>
            <input
              type="text"
              name="branch"
              value={noteData.branch}
              onChange={handleChange}
              placeholder="e.g. CSE, ECE"
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">PDF File</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
          >
            Upload Note
          </button>
        </form>
      )}
    </div>
  );
};

export default UploadNotes;



