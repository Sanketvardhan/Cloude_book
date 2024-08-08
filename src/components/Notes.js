import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

function Notes() {
  const { notes, getNote } = useContext(noteContext);
  useEffect(()=>{
    getNote();
  }, [])
  return (
    <>
    <Addnote/>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((element) => {
          return <NoteItem key={element._id} note={element} />;
        })}
      </div>
    </>
  );
}

export default Notes;
