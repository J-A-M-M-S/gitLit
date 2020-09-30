require("dotenv").config();
const express = require("express");
const routes = require("./controllers");
const app = express();
const db = require("./models");
const environment = process.env.NODE_ENV || "development";
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
var cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));
app.use(express.static("client/build"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gitLitDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
);

// routes
app.use(require("./controllers/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
