const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
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

app.use(cors());

fs.readdir("./uploads", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

app.post("/upload", upload.array("file"), (req, res) => {
  res.status(200).send();
});

app.listen(3030, () => {
  console.log("connected on port 3030");
});
