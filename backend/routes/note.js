const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// ROUTE 1 : Get all the notes useig :GET "/api/notes/fetchallnotes". Doesn't require Auth
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const note = await Note.find({ user: req.user.id });
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred.");
  }
});

// ROUTE 2 : Add notes to db :POST "/api/notes/addnote". Doesn't require Auth
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 chars").isLength({min: 5}),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, tag } = req.body;
      // Create a new note
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();

      res.send("Note saved successfully.");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occurred.");
    }
  }
);

// ROUTE 3 : Updating notes in db :POST "/api/notes/update/id". Doesn't require Auth
router.put("/update/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newnote = {};
    if (title) {
      newnote.title = title;
    }
    if (description) {
      newnote.description = description;
    }
    if (tag) {
      newnote.tag = tag;
    }
    //now find note to update and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newnote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred.");
  }
});


// ROUTE 4 : Deleting notes in db :POST "/api/notes/delet/id". Doesn't require Auth
router.delete("/delete/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occurred.");
  }
});
module.exports = router;
