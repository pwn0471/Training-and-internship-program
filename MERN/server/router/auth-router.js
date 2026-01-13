const express = require("express");
const {home} = require("../controllers/auth-controller");
const {register} = require("../controllers/auth-controller")
const router = express.Router();

router.route("/").get(home)
router.route("/register").post(register)

module.exports = router;