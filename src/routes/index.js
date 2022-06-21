const { Router } = require("express");

const view = require("./view");
const api = require("./api");

const router = router();

router.use("/", view);
router.use("/", api);

module.exports = router;
