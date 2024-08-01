import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const { notes, setNotes } = useContext(noteContext);
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((element) => {
        return <NoteItem note={element}/>;
      })}
    </div>
  );
}

export default Notes;
