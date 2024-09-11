var express = require("express");
var router = express.Router();
const pengerjaanController = require("../controllers/pengerjaanController");

router.post("/create", pengerjaanController.create);

module.exports = router;
