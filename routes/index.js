var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
// ROUTER USER
const userRouter = require("./usersRoutes");
router.use("/users", userRouter);
// ROUTER ASSESSMENT
const assessmentRouter = require("./assessmentRoutes");
router.use("/assessment", assessmentRouter);
// ROUTER SOAL
const soalRouter = require("./soalRoutes");
router.use("/soal", soalRouter);
// ROUTER PILIHAN
const pilihanRouter = require("./pilihanRoutes");
// router.use("/pilihan", pilihanRouter);

module.exports = router;
