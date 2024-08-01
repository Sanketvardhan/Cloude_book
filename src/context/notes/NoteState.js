import React,{useState} from "react";
import noteContext from "./noteContext";

const NoteState= (props) => {
    const notesInitial=[
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bac97c6ae3ef3d0b0e22",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My first title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:05.000Z",
          "__v": 0
        },
        {
          "_id": "66a1bacc7c6ae3ef3d0b0e24",
          "user": "6699d3b6b50d85f57bec1d1c",
          "title": "My second title",
          "description": "Making a example note.",
          "tag": "personal",
          "data": "2024-07-25T02:39:08.000Z",
          "__v": 0
        }
      ]
    
    const [notes,setNotes] = useState(notesInitial)
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
};
export default NoteState;