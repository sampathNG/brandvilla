// const { fileStorage, fileFilter } = require("../utils/storage");
const {
  logoStorage,
  festivalStorage,
  posterStorage,
  brocherStorage,
  fileFilter,
  visitingCardStorage,
} = require("../utils/storage");
const multer = require("multer");
// const uploadImage = multer({
const uploadLogo = multer({
  storage: logoStorage,
  fileFilter: fileFilter,
}).single("image");
const uploadFestival = multer({
  storage: festivalStorage,
  fileFilter: fileFilter,
}).single("image");
const uploadPoster = multer({
  storage: posterStorage,
  fileFilter: fileFilter,
}).single("image");
const uploadBrocher = multer({
  storage: brocherStorage,
  fileFilter: fileFilter,
}).single("image");
const uploadVisistingCard = multer({
  storage: visitingCardStorage,
  fileFilter: fileFilter,
}).single("image");
const uploadsLogo = (req, res, next) => {
  // uploadImage(req, res, (err) => {
  uploadLogo(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: "Upload failed." });
    }
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded." });
    }
    console.log(`File uploaded`);
    res.send({
      message: "File uploaded successfully!",
    });
  });
};
const uploadsPoster = (req, res, next) => {
  // uploadImage(req, res, (err) => {
  uploadPoster(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: "Upload failed." });
    }
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded." });
    }
    console.log(`File uploaded`);
    res.send({
      message: "File uploaded successfully!",
    });
  });
};
const uploadsFestival = (req, res, next) => {
  // uploadImage(req, res, (err) => {
  uploadFestival(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: "Upload failed." });
    }
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded." });
    }
    console.log(`File uploaded`);
    res.send({
      message: "File uploaded successfully!",
    });
  });
};
const uploadsBrocher = (req, res, next) => {
  // uploadImage(req, res, (err) => {
  uploadBrocher(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: "Upload failed." });
    }
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded." });
    }
    console.log(`File uploaded`);
    res.send({
      message: "File uploaded successfully!",
    });
  });
};
const uploadsVisitingCards = (req, res, next) => {
  // uploadImage(req, res, (err) => {
  uploadVisistingCard(req, res, (err) => {
    if (err) {
      return res.status(500).send({ message: "Upload failed." });
    }
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded." });
    }
    console.log(`File uploaded`);
    res.send({
      message: "File uploaded successfully!",
    });
  });
};
module.exports = {
  uploadsBrocher,
  uploadsFestival,
  uploadsPoster,
  uploadsLogo,
  uploadsVisitingCards,
};
