const { Router } = require("express");
const notes = require("./notes");

const router = Router();

router.use("/notes", notes);

module.exports = router;

// Api Routes
// - GET /api/notes -> get all notes from file
// - DELETE /api/notes/:id -> delete note by id from file
// - POST /api/notes -> create a new note and add to file
