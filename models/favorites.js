const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  id: { type: String },
  name: { type: String },
  image: { type: String },
});

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
