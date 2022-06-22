const { readDataFromFile, writeDataToFile } = require("../utils/fileReadWrite");

//  get notes ()
const getNotes = (req, res) => {
	// get all items from file
	const notes = readDataFromFile("db");

	// send all items as response
	return res.json(notes);
};

// Delete note
const deleteNote = (req, res) => {
	// get id from req
	const { itemId } = req.params;

	// get all items from file
	const { items } = readDataFromFile("db");

	// remove item from file
	const filteredItems = items.filter((item) => item.id !== itemId);

	writeDataToFile("items", { items: filteredItems });

	// send response
	return res.json({
		message: "Successfully deleted note",
	});
};

// Create Note
const createNote = (req, res) => {
	console.log(req.body);
	// get the payload from req body
	const { name } = req.body;

	// create uuid
	// const id = uuidv4();

	// create the item object
	const note = {
		title,
		text,
	};

	// get all items from file
	const data = readDataFromFile("db");

	// push new item to items
	data.items.push(note);

	// write all items to file
	writeDataToFile("db", data);

	// send response
	return res.json({
		message: "Successfully created a new note",
	});
};

module.exports = { getNotes, deleteNote, createNote };
