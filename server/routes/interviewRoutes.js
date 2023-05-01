const express = require("express");
const authenticate = require("../middleware/authMiddleware");
const { addInterview, getInterviews, deleteInterview } = require("../controllers/interviewController");

const router = express.Router();

router.route("/").post(authenticate, addInterview).get(authenticate, getInterviews);
router.delete("/:id", authenticate, deleteInterview);

module.exports = router;