// Importing dependancies
const { Router } = require("express");

const {
	// functions from notes controller file are destructured and imported here
	getNotes,
	deleteNote,
	createNote,
} = require("../controllers/notes");

// Router defined
const router = Router();

// GET all notes from file
router.get("/", getNotes);

// DELETE note by id from file
router.delete("/:id", deleteNote);

// POST a new note and add to file
router.post("/", createNote);

// Declaration of exports
module.exports = router;
