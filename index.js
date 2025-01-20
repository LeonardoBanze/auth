const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8000");
});
