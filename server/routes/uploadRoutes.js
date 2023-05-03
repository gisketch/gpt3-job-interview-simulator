const express = require("express");
const uploadHandler = require("../middleware/uploadMiddleware");
const { upload } = require("../controllers/uploadController");

const router = express.Router();

router.post("/", uploadHandler("pdf"), upload);

module.exports = router;