var express = require("express");
var router = express.Router();
const pengerjaanController = require("../controllers/pengerjaanController");

router.post("/create", pengerjaanController.create);
router.get("/getAll", pengerjaanController.getAll);
router.put("/update", pengerjaanController.update);
router.delete("/delete", pengerjaanController.delete);
module.exports = router;
