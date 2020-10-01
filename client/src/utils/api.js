import axios from "axios";
export default {
  searchDrinks: function (value) {
    return axios.get("http://localhost:3001/api/search/" + value);
  },
  drinkInfo: function (id) {
    if (Number(id)) {
      return axios.get(
        "http://localhost:3001/api/search/drinksearch/" + id,
      );
    } else {
      throw new Error("did not receive a valid ID", id);
    }
  },
};
