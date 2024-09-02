var express = require('express');
var router = express.Router();
const authController = require("../controllers/authController")

router.post("/",authController.register)
module.exports = router;
router.post("/login",authController.login)
module.exports = router;
