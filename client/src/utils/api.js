import axios from "axios";
export default {
  searchDrinks: function (value) {
    return axios.get("http://localhost:3001/api/search/" + value);
  },
  saveFav: function () {
    console.log("testing savfav");
  },
};
