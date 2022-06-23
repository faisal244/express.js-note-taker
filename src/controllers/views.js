const path = require("path");

// render home page function - returns the index.html file

const renderHomePage = (req, res) => {
	// get file path
	const filePath = path.join(__dirname, "../../public/index.html");

	//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
	return res.sendFile(filePath);
};

// render notes page function - returns the notes.html file
const renderNotePage = (req, res) => {
	// get file path
	const filePath = path.join(__dirname, "../../public/notes.html");

	//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
	return res.sendFile(filePath);
};

// Export of functions
module.exports = {
	renderHomePage,
	renderNotePage,
};
