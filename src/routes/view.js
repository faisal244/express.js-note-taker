const { Router } = require("express");

const { renderHomePage } = require("../controllers/views");
// functions from views.js controller file can be destructured and listed here

const router = Router();

// router.get("/notes", getAndRenderNotes);
router.get("/", renderHomePage);

module.exports = router;

// get /

//  get note /
