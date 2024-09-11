var express = require("express");
var router = express.Router();
const soalController = require("../controllers/soalController");

router.post("/create", soalController.create);
router.get("/getAll", soalController.getAll);
router.put("/update", soalController.update);
router.delete("/delete", soalController.delete);

module.exports = router;
