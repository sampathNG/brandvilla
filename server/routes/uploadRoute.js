const express = require("express");
const router = express.Router();
const {
  uploadsBrocher,
  uploadsFestival,
  uploadsPoster,
  uploadsLogo,
} = require("../controller/uploadController");
const authAdmin = require("../utils/authorization");
router.post("/uploadLogo", authAdmin, uploadsLogo);
router.post("/uploadPoster", authAdmin, uploadsPoster);
router.post("/uploadFestival", authAdmin, uploadsFestival);
router.post("/uploadBrocher", authAdmin, uploadsBrocher);
module.exports = router;
