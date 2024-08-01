import React from "react";

function NoteItem({ note }) {
  return (
    <div className="col-md-2">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align_item_center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-file-pen"></i>
            <i className="fa-solid fa-trash"></i>
          </div>

          <p className="card-text">{note.description}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
