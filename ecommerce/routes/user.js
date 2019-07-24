const express = require("express");
const router = express.Router();

const { requiredSignin, isAdmin, isAuth } = require("../controllers/auth");
const { userById, read, update } = require("../controllers/user");

router.get("/secret/:userId", requiredSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});

router.get("/user/:userId", requiredSignin, isAuth, read);
router.put("/user/:userId", requiredSignin, isAuth, update);

// Siempre que exista este parametro en la url, se ejecuta
router.param("userId", userById);

module.exports = router;
