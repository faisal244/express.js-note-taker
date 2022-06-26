const express = require("express");
const path = require("path");

const routes = require("./routes");

const init = async () => {
	try {
		const PORT = (process.env.PORT = 4000);

		const app = express();

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
			error: "Something went wrong - server could not start",
		});
	}
};

init();
