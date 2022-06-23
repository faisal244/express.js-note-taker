// Declaration of Imports

const fs = require("fs");
const path = require("path");

// read from JSON file and return array of notes
const readDataFromFile = (fileName) => {
	const filePath = path.join(__dirname, `../data/${fileName}.json`);

	const rawData = fs.readFileSync(filePath, "utf8");
	return JSON.parse(rawData);
};

// validate POST body & create new note object
const writeDataToFile = (fileName, data) => {
	const filePath = path.join(__dirname, `../data/${fileName}.json`);

	fs.writeFileSync(filePath, JSON.stringify(data));
};

// Declaration of Exports
module.exports = {
	readDataFromFile,
	writeDataToFile,
};
