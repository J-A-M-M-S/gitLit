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
};
