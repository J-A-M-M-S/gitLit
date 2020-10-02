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

// Serve up static assets (usually on heroku)
console.log(process.env.NODE_ENV);
if (environment === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Mongoose Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget",
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
