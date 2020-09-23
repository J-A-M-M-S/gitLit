import axios from "axios";
export default {
  searchDrinks: function (value) {
    return axios.get("/api/search/" + value);
  },
};
