const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  drinks: [
    {
      id: { type: Number },
      name: { type: String },
    },
  ],
});

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports - Favorites;
