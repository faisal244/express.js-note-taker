const { Router } = require("express");

const {
	// functions from notes controller file can be destructured and listed here
} = require("../controllers/notes");

const router = Router();
router.get("/", getNotes);
router.delete("/", deleteNote);
router.post("/", createNote);

module.exports = router;

//  GET /

//  DELETE  /

// POST /
