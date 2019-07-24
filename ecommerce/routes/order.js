const express = require("express");
const router = express.Router();

const { requiredSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { create } = require("../controllers/order");

router.post("/order/create/:userId", requiredSignin, isAuth, create);

router.param("userId", userById);

module.exports = router;
