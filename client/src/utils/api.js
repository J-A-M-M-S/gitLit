import axios from "axios";

export default {
  searchDrinks: function (value) {
    return axios.get(
      process.env.REACT_APP_BACKEND_ROUTE + "/api/search/" + value,
    );
  },
  drinkInfo: function (id) {
    if (Number(id)) {
      return axios.get(
        process.env.REACT_APP_BACKEND_ROUTE +
          "/api/search/drinksearch/" +
          id,
      );
    } else {
      throw new Error("did not receive a valid ID", id);
    }
  },
  saveFav: function (userid, favorite) {
    let newFav = false;
    let favorites = JSON.parse(localStorage.getItem(userid)) || [];
    if (
      favorites.length === 0 ||
      favorites.indexOf(favorite) === -1
    ) {
      favorites.push(favorite);
      newFav = true;
    } else {
      favorites = favorites.filter((fav) => fav !== favorite);
    }
    localStorage.setItem(userid, JSON.stringify(favorites));
    return newFav;
  },

  getFavorites: function (userid) {
    return JSON.parse(localStorage.getItem(userid)) || [];
  },

  searchFromLiquor: function (liquor) {
    return axios.get(
      process.env.REACT_APP_BACKEND_ROUTE + "/api/roulette/" + liquor,
    );
  },
  totalSurprise: function () {
    return axios.get(
      process.env.REACT_APP_BACKEND_ROUTE + "/api/roulette/random/",
    );
  },
};
