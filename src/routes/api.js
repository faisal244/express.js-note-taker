// Importing dependancies
const { Router } = require("express");
const notes = require("./notes");

// Router defined
const router = Router();

// Route declared
router.use("/notes", notes);

// Declaration of exports
module.exports = router;
