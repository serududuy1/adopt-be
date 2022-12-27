const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { user, animal, history } = require("./src/routes");
const multer = require("multer");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const cekfileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(
  multer({ storage: fileStorage, fileFilter: cekfileFilter }).single("images")
);
app.use("/user/", user);
app.use("/animal/", animal);
app.use("/history/", history);

app.use("/", (req, res) => {
  res.status(200).json({
    message: "URL TIDAK TERSEDIA",
  });
});
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message, data });
});

app.listen(port, () => console.log(`berjalan di http://localhost:${port}/`));
