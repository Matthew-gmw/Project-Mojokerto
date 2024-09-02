var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
const userRouter = require("./users");
router.use("/users", userRouter);
module.exports = router;
