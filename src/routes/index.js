// Importing dependancies
const { Router } = require("express");

const view = require("./view");
const api = require("./api");

// Router defined
const router = Router();

// Routes declared
router.use("/api", api);
router.use("/", view);

// Declaration of exports
module.exports = router;
