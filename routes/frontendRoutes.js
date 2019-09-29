var express = require("express");
var router = express.Router();
var authController = require("../app/controllers/web/auth.js");

router.get("/", (req, res) => {
  res.render("index.html");
});
router.get("/signup", (req, res) => {
  res.render("signup.html");
});
router.post("/signup", authController.register); //Create New User
router.get("/login", (req, res) => {
    res.render("login.html");
  });
 // router.post("/login", authController.login); //Login

module.exports = router;
