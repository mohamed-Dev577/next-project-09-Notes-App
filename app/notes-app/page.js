"use client";

import { useState } from "react";

export default function NotesAppPage() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote =()  => {
    if(note.trim() !== "") {
        setNotes([...notes, note]);
        setNote("");
    }
  }

  const deleteNote = (index) => {
    setNotes((currentNotes) => currentNotes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Notes App</h1>

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );




}