// import React, { useEffect, useState } from "react";

// const NotesList = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     setNotes(storedNotes);
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
//         📚 Uploaded Notes
//       </h2>

//       {notes.length === 0 ? (
//         <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
//           No notes uploaded yet.
//         </p>
//       ) : (
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {notes.map((note, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6"
//             >
//               <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">
//                 {note.title}
//               </h3>
//               <ul className="space-y-1 text-sm leading-6">
//                 <li>
//                   <strong>📘 Subject:</strong> {note.subject}
//                 </li>
//                 <li>
//                   <strong>🏷️ Branch:</strong> {note.branch}
//                 </li>
//                 <li>
//                   <strong>📚 Semester:</strong> {note.semester}
//                 </li>
//                 <li>
//                   <strong>📎 File:</strong> {note.fileName || "N/A"}
//                 </li>

//                 {/* View PDF link */}
//                 {note.fileUrl && (
//                   <li>
//                     <a
//                       href={note.fileUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline mt-2 inline-block"
//                     >
//                       📄 View PDF
//                     </a>
//                   </li>
//                 )}

//                 {/* Uploaded time */}
//                 <li className="text-xs text-gray-600 dark:text-gray-400 mt-2">
//                   Uploaded on:{" "}
//                   {new Date(note.uploadedAt).toLocaleString("en-IN", {
//                     dateStyle: "medium",
//                     timeStyle: "short",
//                   })}
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotesList;

// import React, { useEffect, useState } from "react";

// const NotesList = () => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [filters, setFilters] = useState({ branch: "", semester: "" });
//   const [sortOrder, setSortOrder] = useState("newest");

//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     setNotes(storedNotes);
//   }, []);

//   useEffect(() => {
//     let filtered = [...notes];

//     // Match case-insensitively
//     if (filters.branch) {
//       filtered = filtered.filter(
//         (note) => note.branch?.toLowerCase() === filters.branch.toLowerCase()
//       );
//     }

//     if (filters.semester) {
//       filtered = filtered.filter(
//         (note) => String(note.semester) === String(filters.semester)
//       );
//     }

//     // Sort by upload time
//     filtered.sort((a, b) => {
//       const dateA = new Date(a.uploadedAt);
//       const dateB = new Date(b.uploadedAt);
//       return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
//     });

//     setFilteredNotes(filtered);
//   }, [notes, filters, sortOrder]);

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
//         📚 Uploaded Notes
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
//         <select
//           value={filters.branch}
//           onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
//           className="border p-2 rounded"
//         >
//           <option value="">All Branches</option>
//           <option value="CSE">CSE</option>
//           <option value="ECE">ECE</option>
//           <option value="ME">ME</option>
//           <option value="CE">CE</option>
//         </select>

//         <select
//           value={filters.semester}
//           onChange={(e) => setFilters({ ...filters, semester: e.target.value })}
//           className="border p-2 rounded"
//         >
//           <option value="">All Semesters</option>
//           {[...Array(8)].map((_, i) => (
//             <option key={i + 1} value={(i + 1).toString()}>
//               Semester {i + 1}
//             </option>
//           ))}
//         </select>

//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="newest">📅 Newest First</option>
//           <option value="oldest">🕰️ Oldest First</option>
//         </select>
//       </div>

//       {filteredNotes.length === 0 ? (
//         <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
//           No notes found.
//         </p>
//       ) : (
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNotes.map((note, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6"
//             >
//               <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">
//                 {note.title}
//               </h3>
//               <ul className="space-y-1 text-sm leading-6">
//                 <li>
//                   <strong>📘 Subject:</strong> {note.subject}
//                 </li>
//                 <li>
//                   <strong>🏷️ Branch:</strong> {note.branch}
//                 </li>
//                 <li>
//                   <strong>📚 Semester:</strong> {note.semester}
//                 </li>
//                 <li>
//                   <strong>📎 File:</strong> {note.fileName || "N/A"}
//                 </li>
//                 <li className="mt-1 space-x-3">
//                   <a
//                     href={note.fileUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline"
//                   >
//                     📄 View PDF
//                   </a>
//                   <a
//                     href={note.fileUrl}
//                     download={note.fileName}
//                     className="text-green-600 underline"
//                   >
//                     ⬇️ Download
//                   </a>
//                 </li>
//                 <li className="text-xs text-gray-600 dark:text-gray-400 mt-2">
//                   Uploaded on:{" "}
//                   {new Date(note.uploadedAt).toLocaleString("en-IN", {
//                     dateStyle: "medium",
//                     timeStyle: "short",
//                   })}
//                 </li>
//               </ul>

//               {/* Dummy rating */}
//               <div className="mt-4">
//                 <span className="text-yellow-500">⭐️⭐️⭐️⭐️☆</span>
//                 <p className="text-xs text-gray-500">Rated 4/5</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotesList;

// import React, { useEffect, useState } from "react";

// const NotesList = () => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [filters, setFilters] = useState({ branch: "", semester: "" });
//   const [sortOrder, setSortOrder] = useState("newest");

//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     setNotes(storedNotes);
//   }, []);

//   useEffect(() => {
//     let filtered = [...notes];

//     if (filters.branch.trim()) {
//       filtered = filtered.filter(
//         (note) =>
//           note.branch?.toLowerCase().trim() === filters.branch.toLowerCase().trim()
//       );
//     }

//     if (filters.semester.trim()) {
//       filtered = filtered.filter(
//         (note) => String(note.semester) === String(filters.semester)
//       );
//     }

//     filtered.sort((a, b) => {
//       const dateA = new Date(a.uploadedAt);
//       const dateB = new Date(b.uploadedAt);
//       return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
//     });

//     setFilteredNotes(filtered);
//   }, [notes, filters, sortOrder]);

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
//         📚 Uploaded Notes
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
//         <select
//           value={filters.branch}
//           onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
//           className="border p-2 rounded"
//         >
//           <option value="">All Branches</option>
//           <option value="CSE">CSE</option>
//           <option value="ECE">ECE</option>
//           <option value="ME">ME</option>
//           <option value="CE">CE</option>
//         </select>

//         <select
//           value={filters.semester}
//           onChange={(e) =>
//             setFilters({ ...filters, semester: e.target.value })
//           }
//           className="border p-2 rounded"
//         >
//           <option value="">All Semesters</option>
//           {[...Array(8)].map((_, i) => (
//             <option key={i + 1} value={(i + 1).toString()}>
//               Semester {i + 1}
//             </option>
//           ))}
//         </select>

//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="newest">📅 Newest First</option>
//           <option value="oldest">🕰️ Oldest First</option>
//         </select>
//       </div>

//       {filteredNotes.length === 0 ? (
//         <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
//           No notes found.
//         </p>
//       ) : (
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNotes.map((note, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6"
//             >
//               <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">
//                 {note.title}
//               </h3>
//               <ul className="space-y-1 text-sm leading-6">
//                 <li>
//                   <strong>📘 Subject:</strong> {note.subject}
//                 </li>
//                 <li>
//                   <strong>🏷️ Branch:</strong> {note.branch}
//                 </li>
//                 <li>
//                   <strong>📚 Semester:</strong> {note.semester}
//                 </li>
//                 <li>
//                   <strong>📎 File:</strong> {note.fileName || "N/A"}
//                 </li>
//                 {note.fileUrl ? (
//                   <li className="mt-2 space-x-4">
//                     <a
//                       href={note.fileUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline"
//                     >
//                       📄 View PDF
//                     </a>
//                     <a
//                       href={note.fileUrl}
//                       download={note.fileName}
//                       className="text-green-600 underline"
//                     >
//                       ⬇️ Download
//                     </a>
//                   </li>
//                 ) : (
//                   <li className="text-red-600">File not available</li>
//                 )}
//                 <li className="text-xs text-gray-600 dark:text-gray-400 mt-2">
//                   Uploaded on:{" "}
//                   {new Date(note.uploadedAt).toLocaleString("en-IN", {
//                     dateStyle: "medium",
//                     timeStyle: "short",
//                   })}
//                 </li>
//               </ul>

//               <div className="mt-4">
//                 <span className="text-yellow-500">⭐️⭐️⭐️⭐️☆</span>
//                 <p className="text-xs text-gray-500">Rated 4/5</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotesList;

// import React, { useEffect, useState } from "react";

// const NotesList = () => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [filters, setFilters] = useState({ branch: "", semester: "" });
//   const [sortOrder, setSortOrder] = useState("newest");

//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     setNotes(storedNotes);
//   }, []);

//   useEffect(() => {
//     let filtered = [...notes];

//     if (filters.branch.trim()) {
//       filtered = filtered.filter(
//         (note) =>
//           note.branch?.toLowerCase().trim() ===
//           filters.branch.toLowerCase().trim()
//       );
//     }

//     if (filters.semester.trim()) {
//       filtered = filtered.filter(
//         (note) => String(note.semester) === String(filters.semester)
//       );
//     }

//     filtered.sort((a, b) => {
//       const dateA = new Date(a.uploadedAt);
//       const dateB = new Date(b.uploadedAt);
//       return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
//     });

//     setFilteredNotes(filtered);
//   }, [notes, filters, sortOrder]);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10">
//         📚 Uploaded Notes
//       </h2>

//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
//         <select
//           value={filters.branch}
//           onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
//           className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100"
//         >
//           <option value="">All Branches</option>
//           <option value="CSE">CSE</option>
//           <option value="ECE">ECE</option>
//           <option value="ME">ME</option>
//           <option value="CE">CE</option>
//            <option value="IT">IT</option>
//         </select>

//         <select
//           value={filters.semester}
//           onChange={(e) =>
//             setFilters({ ...filters, semester: e.target.value })
//           }
//           className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100"
//         >
//           <option value="">All Semesters</option>
//           {[...Array(8)].map((_, i) => (
//             <option key={i + 1} value={(i + 1).toString()}>
//               Semester {i + 1}
//             </option>
//           ))}
//         </select>

//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100"
//         >
//           <option value="newest">📅 Newest First</option>
//           <option value="oldest">🕰️ Oldest First</option>
//         </select>
//       </div>

//       {filteredNotes.length === 0 ? (
//         <p className="text-center text-gray-600 dark:text-gray-400 text-lg mt-8">
//           No notes found.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNotes.map((note, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl"
//             >
//               <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
//                 {note.title}
//               </h3>

//               <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
//                 <li>
//                   <strong>📘 Subject:</strong> {note.subject}
//                 </li>
//                 <li>
//                   <strong>🏷️ Branch:</strong> {note.branch}
//                 </li>
//                 <li>
//                   <strong>📚 Semester:</strong> {note.semester}
//                 </li>
//                 <li>
//                   <strong>📎 File:</strong>{" "}
//                   <span className="text-black dark:text-white font-medium">
//                     {note.fileName || "N/A"}
//                   </span>
//                 </li>

//                 {note.fileUrl ? (
//                   <li className="mt-3 flex flex-wrap gap-3">
//                     <a
//                       href={note.fileUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                     >
//                       📄 View PDF
//                     </a>
//                     <a
//                       href={note.fileUrl}
//                       download={note.fileName}
//                       className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
//                     >
//                       ⬇️ Download
//                     </a>
//                   </li>
//                 ) : (
//                   <li className="text-red-500 font-medium mt-2">
//                     ❌ File not available
//                   </li>
//                 )}

//                 <li className="text-xs text-gray-500 dark:text-gray-400 mt-3">
//                   Uploaded on:{" "}
//                   {note.uploadedAt
//                     ? new Date(note.uploadedAt).toLocaleString("en-IN", {
//                         dateStyle: "medium",
//                         timeStyle: "short",
//                       })
//                     : "Unknown"}
//                 </li>
//               </ul>

//               <div className="mt-4">
//                 <span className="text-yellow-400 text-xl">⭐️⭐️⭐️⭐️☆</span>
//                 <p className="text-xs text-gray-400">Rated 4/5</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotesList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NotesList = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/notes")
//       .then((res) => {
//         setNotes(res.data);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching notes:", err);
//       });
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg rounded-xl">
//       <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 text-center">📚 All Uploaded Notes</h2>
//       {notes.length === 0 ? (
//         <p className="text-center text-gray-500">No notes uploaded yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {notes.map((note) => (
//             <li key={note._id} className="border rounded-md p-4 bg-gray-50 dark:bg-gray-800">
//               <p><strong>📄 Title:</strong> {note.title}</p>
//               <p><strong>📘 Subject:</strong> {note.subject}</p>
//               <p><strong>🏷️ Branch:</strong> {note.branch}</p>
//               <p><strong>📚 Semester:</strong> {note.semester}</p>
//               <p><strong>🕒 Uploaded At:</strong> {new Date(note.uploadedAt).toLocaleString()}</p>
//               <p><strong>📎 File:</strong> {note.fileUrl}</p>
//               {/* Optional: If hosted, provide a link */}
//               {/* <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View PDF</a> */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NotesList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notes")
      .then((res) => {
        const notesWithLikes = res.data.map((note) => ({
          ...note,
          likes: note.likes || 0,
        }));
        setNotes(notesWithLikes);
        setFilteredNotes(notesWithLikes);
      })
      .catch((err) => {
        console.error("❌ Error fetching notes:", err);
      });
  }, []);

  useEffect(() => {
    let updatedNotes = [...notes];

    // Search filter
    if (searchTerm) {
      updatedNotes = updatedNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Semester filter
    if (semesterFilter) {
      updatedNotes = updatedNotes.filter(
        (note) => note.semester === semesterFilter
      );
    }

    // Branch filter
    if (branchFilter) {
      updatedNotes = updatedNotes.filter(
        (note) => note.branch.toLowerCase() === branchFilter.toLowerCase()
      );
    }

    // Sort
    updatedNotes.sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.uploadedAt) - new Date(a.uploadedAt)
        : new Date(a.uploadedAt) - new Date(b.uploadedAt);
    });

    setFilteredNotes(updatedNotes);
  }, [searchTerm, semesterFilter, branchFilter, sortOrder, notes]);

  const handleLike = (id) => {
    const updatedNotes = notes.map((note) =>
      note._id === id ? { ...note, likes: (note.likes || 0) + 1 } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
        📚 All Uploaded Notes
      </h2>

      {/* 🔍 Filter & Sort Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by title or subject"
          className="p-2 border rounded w-full sm:w-64 dark:bg-gray-800"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded dark:bg-gray-800"
          onChange={(e) => setSemesterFilter(e.target.value)}
          value={semesterFilter}
        >
          <option value="">🎓 All Semesters</option>
          {[...Array(8)].map((_, i) => (
            <option key={i + 1} value={String(i + 1)}>
              Semester {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="🏷️ Filter by Branch"
          className="p-2 border rounded w-full sm:w-40 dark:bg-gray-800"
          onChange={(e) => setBranchFilter(e.target.value)}
        />
        <select
          className="p-2 border rounded dark:bg-gray-800"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="newest">📅 Newest First</option>
          <option value="oldest">📜 Oldest First</option>
        </select>
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-center text-gray-500">No matching notes found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredNotes.map((note) => (
            <li
              key={note._id}
              className="border rounded-md p-4 bg-gray-50 dark:bg-gray-800"
            >
              <p>
                <strong>📄 Title:</strong> {note.title}
              </p>
              <p>
                <strong>📘 Subject:</strong> {note.subject}
              </p>
              <p>
                <strong>🏷️ Branch:</strong> {note.branch}
              </p>
              <p>
                <strong>📚 Semester:</strong> {note.semester}
              </p>
              <p>
                <strong>🕒 Uploaded:</strong>{" "}
                {new Date(note.uploadedAt).toLocaleString()}
              </p>
              {/* <p><strong>📎 File:</strong> {note.fileUrl}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => handleLike(note._id)}
                  className="text-sm px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  👍 Like
                </button>
                <span>{note.likes} likes</span>
              </div> */}
              {note.fileUrl && (
                <div className="mt-2 space-x-4">
                  {/* View */}
                  <a
                    href={note.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    🔍 View PDF
                  </a>

                  {/* Download */}
                  <a
                    href={note.fileUrl}
                    download
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    ⬇️ Download PDF
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
