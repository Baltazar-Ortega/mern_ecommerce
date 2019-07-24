const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requiredSignin, isAuth } = require("../controllers/auth");
const { generateToken, processPayment } = require("../controllers/braintree");

// solo usuarios autenticados
router.get(
  "/braintree/getToken/:userId",
  requiredSignin,
  isAuth,
  generateToken
);

router.post(
  "/braintree/payment/:userId",
  requiredSignin,
  isAuth,
  processPayment
);

router.param("userId", userById);

module.exports = router;
