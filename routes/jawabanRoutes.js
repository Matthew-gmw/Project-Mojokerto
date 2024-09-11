var express = require("express");
var router = express.Router();
const jawabanController = require("../controllers/jawabanController");

router.post("/create", jawabanController.create);
router.get("/getAll", jawabanController.getAll);

module.exports = router;
