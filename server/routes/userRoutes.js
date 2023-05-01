const express = require("express");
const authenticate = require("../middleware/authMiddleware");
const { register, login, getProfile } = require("../controllers/userController");

const router = express.Router();

router.post("/register", authenticate, register);
router.post("/login", authenticate, login);
router.get("/:id", authenticate, getProfile);

module.exports = router;