const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
	const filePath = path.join(__dirname, `../data/${fileName}.json`);

	const rawData = fs.readFileSync(filePath, "utf8");

	return JSON.parse(rawData);
};

const writeDataToFile = () => {
	const filePath = path.join(__dirname, "");
	fs.writeFileSync();
};

module.exports = {
	readDataFromFile,
	writeDataToFile,
};
