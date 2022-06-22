const { Router } = require("express");

const { renderHomePage, renderNotePage } = require("../controllers/views");
// functions from views.js controller file can be destructured and listed here

const router = Router();

router.get("/", renderHomePage);
router.get("/notes", renderNotePage);

module.exports = router;

// get /

//  get note /
