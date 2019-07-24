const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requiredSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/hello", requiredSignin, (req, res) => {
  res.send("holaaa");
});

module.exports = router;
