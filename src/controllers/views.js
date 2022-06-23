const path = require("path");

// render home page function - returns the index.html file

const renderHomePage = (req, res) => {
	try {
		// get file path
		const filePath = path.join(__dirname, "../../public/index.html");

		//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
		return res.sendFile(filePath);
	} catch (error) {
		// console.log(
		// 	`[ERROR]: Server error - Failed to load homepage | ${error.message}`
		// );
		return res.status(404).json({
			success: false,
			error: "Server error - Failed to load Homepage",
		});
	}
};

// render notes page function - returns the notes.html file
const renderNotePage = (req, res) => {
	try {
		// get file path
		const filePath = path.join(__dirname, "../../public/notes.html");

		//  use res.sendFile() - pass in the path of the file you want to send over the server as a response
		return res.sendFile(filePath);
	} catch (error) {
		// console.log(
		// 	`[ERROR]: Server error - Failed to load notes page | ${error.message}`
		// );
		return res.status(404).json({
			success: false,
			error: "Failed to load notes page",
		});
	}
};

// Export of functions
module.exports = {
	renderHomePage,
	renderNotePage,
};
