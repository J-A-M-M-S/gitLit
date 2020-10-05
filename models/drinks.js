const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
  id: Number,
  name: String,
});

const Drinks = mongoose.model("Drinks", DrinksSchema);

module.exports - Drinks;
