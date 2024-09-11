var express = require("express");
var router = express.Router();
const assessmentController = require("../controllers/assesmentController");

router.post("/create", assessmentController.create);
router.get("/getAll", assessmentController.getAll);
router.put("/update", assessmentController.update);
router.delete("/delete", assessmentController.delete);

// router.post("/login", authController.login);

module.exports = router;
