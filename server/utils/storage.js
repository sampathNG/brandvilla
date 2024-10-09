const multer = require("multer");
const path = require("path");
exports.logoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/logos");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
exports.festivalStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/festival");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
exports.posterStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/posters");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
exports.brocherStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/brochers");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
exports.fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
