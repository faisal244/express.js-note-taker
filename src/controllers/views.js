const path = require("path");
// render home page

// render notes page

const renderHomePage = (req, res) => {
	// return the index.html file

	// get file path
	const filePath = path.join(__dirname, "../../public/index.html");
	//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
	return res.sendFile(filePath);
};

const renderNotePage = (req, res) => {
	const filePath = path.join(__dirname, "../../public/notes.html");
	return res.sendFile(filePath);
};

module.exports = {
	renderHomePage,
	renderNotePage,
};
