const express = require("express");
const path = require("path");

const routes = require("./routes");

const init = async () => {
	try {
		// Defining the port to be used by Heroku, and a fallback for use on a local machine
		const PORT = process.env.PORT || 4000;

		const app = express();
		// Declaring middlewares to be used
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(express.static(path.join(__dirname, "../public")));
		app.use(routes);

		app.listen(PORT, () => {
			console.log(`server running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`[ERROR]: Failed to start server | ${error.message}`);
		return res.status(404).JSON({
			success: false,
			error: "Something went wrong -  Failed to start server",
		});
	}
};

init();
