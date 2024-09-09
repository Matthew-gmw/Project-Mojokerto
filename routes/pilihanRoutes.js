var express = require("express");
var router = express.Router();
const pilihanController = require("../controllers/pilihanController");

router.post("/create", pilihanController.create);
module.exports = router;
