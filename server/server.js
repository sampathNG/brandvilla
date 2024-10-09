const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./database/connection");
connectDB(); // function to test database connection
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
const path = require("path");
const fs = require("fs");
app.use("/images", express.static(path.join(__dirname, "images")));
app.get("/api/logos", (req, res) => {
  const logosDir = path.join(__dirname, "images", "logos"); // Path to the logos folder

  fs.readdir(logosDir, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Unable to scan directory: " + err });
    }

    // Filter for image files
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));

    // Send the list of images and their count
    res.json({
      count: images.length,
      files: images.map((file) => `/images/logos/${file}`), // Send full paths
    });
  });
});
//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
app.use("/", require("./routes/uploadRoute"));
app.use("/", require("./routes/userRoute"));
app.get("/", (req, res) => {
  try {
    res.send("server is running");
  } catch (error) {
    res.send(error.message);
  }
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
