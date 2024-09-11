var express = require("express");
var router = express.Router();
const pilihanController = require("../controllers/pilihanController");

router.post("/create", pilihanController.create);
router.get("/getAll", pilihanController.getAll);
router.put("/update", pilihanController.update);
router.delete("/delete", pilihanController.delete);
module.exports = router;
