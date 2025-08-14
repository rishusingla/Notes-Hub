import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-xl font-semibold">{note.subject}</h3>
      <p className="text-gray-600">Branch: {note.branch}</p>
      <p className="text-gray-600">Semester: {note.semester}</p>
      <a
        href={note.fileURL}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        📄 View / Download
      </a>
    </div>
  );
};

export default NoteCard;
