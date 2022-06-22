const { Router } = require("express");

const {
	// functions from notes controller file can be destructured and listed here
	getNotes,
	deleteNote,
	createNote,
} = require("../controllers/notes");

const router = Router();
router.get("/", getNotes);
router.delete("/:id", deleteNote);
router.post("/", createNote);

module.exports = router;
