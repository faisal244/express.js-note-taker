const { readDataFromFile, writeDataToFile } = require("../utils/fileReadWrite");
const { v4: uuidv4 } = require("uuid");

// Create Note
const createNote = (req, res) => {
	console.log(req.body);
	// get the payload from req body
	const { title, text } = req.body;

	// create uuid
	const id = uuidv4();

	// create the note object
	const note = {
		id,
		title,
		text,
	};

	// get all notes from file
	const notes = readDataFromFile("db");

	// push new note to notes
	notes.push(note);

	// write all notes to file
	writeDataToFile("db", notes);

	// send response
	return res.json({
		message: "Successfully created a new note",
	});
};

//  get notes
const getNotes = (req, res) => {
	console.log("entered getNotes in notes controller");
	// get all notes from file
	const notes = readDataFromFile("db");
	console.log("getnotesabc", notes);
	// send all notes as response
	return res.json(notes);
};

// Delete note
const deleteNote = (req, res) => {
	// get id from req
	const { id } = req.params;

	// get all notes from file
	const notes = readDataFromFile("db");

	// remove note from file
	const filterednotes = notes.filter((note) => note.id !== id);

	writeDataToFile("db", filterednotes);

	// send response
	return res.json({
		message: "Successfully deleted note",
	});
};

module.exports = { getNotes, deleteNote, createNote };
