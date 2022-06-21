const { Router } = require("express");

const {
	// functions from views.js controller file can be destructured and listed here
} = require("./controllers/view");

const router = Router();

router.get("/", getAndRenderNotes);
router.get("/", renderActiveNote);
router.get("/", renderNoteList);

// get /

//  get note /
