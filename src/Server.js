const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "upload");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  dest: "tmp/",
  storage
});

const fs = require("fs");

app.post("/upload", upload.array("photos", 5), (req, res) => {
  console.log(req.files);
  res.end();
});

app.listen(3030, () => {
  console.log("connected on port 3030");
});
