import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //get all note
  const getNote = async () => {
    // API call
    let url = `${host}/api/notes/fetchallnotes`;

    // fetching data from backend
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5OWRlMGRiYzUzNTk4YzE5ZDk2MDZkIn0sImlhdCI6MTcyMTcwMTI5M30.kMvDHBzcnjdOGZWAo9iXOHPSZumUc25nt0fZrvROV7I",
      },
    });
    const json = await response.json();
    // console.log(json)
    setNotes(json);
  };

  //Add note
  const addNote = async ({ title, description, tag }) => {
    // API call
    let url = `${host}/api/notes/addnote`;
    console.log(url)
    // fetching data from backend
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5OWRlMGRiYzUzNTk4YzE5ZDk2MDZkIn0sImlhdCI6MTcyMTYxODUxOH0.vKQ8re5J7hwXVS04FCi7krG_HLVuI5AbuGp19rK9vpE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json= await response.json();
    console.log(json)

    console.log("adding a new note");
    let note = {
      _id: "66a1bacc7c5ae3ef3d0b0e24",
      user: "6699d3b6b50d85f57bec1d1c",
      title: title,
      description: description,
      tag: tag,
      data: "2024-07-25T02:39:08.000Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delet note
  const deletNote = async (id) => {
    // API call
    let url = `${host}/api/notes/delete/${id}`;

    // fetching data from backend
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5OWRlMGRiYzUzNTk4YzE5ZDk2MDZkIn0sImlhdCI6MTcyMTcwMTI5M30.kMvDHBzcnjdOGZWAo9iXOHPSZumUc25nt0fZrvROV7I",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("deleting note with id:" + id);
    const newnote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnote);
  };

  //Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    let url = `${host}/api/notes/update/${id}`;

    // fetching data from backend
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5OWRlMGRiYzUzNTk4YzE5ZDk2MDZkIn0sImlhdCI6MTcyMTcwMTI5M30.kMvDHBzcnjdOGZWAo9iXOHPSZumUc25nt0fZrvROV7I",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json)

    let newNotes= JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if ((element._id === id)) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deletNote, editNote, getNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
