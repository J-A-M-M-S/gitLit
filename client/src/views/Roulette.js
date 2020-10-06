import React, { useState } from "react";
import API from "../utils/api";
import RandomButtons from "../components/RandomButtons/RandomButtons";
import DrinkDetails from "../components/DrinkDetails/DrinkDetails";

const Roulette = () => {
  //  Sets state for drink and ingredient searches
  const [data, setdata] = useState([]);
  const [deetsSearch, setDeetsSearch] = useState({});

  // API call to find all cocktails matching input
  const searchLiquor = (value) => {
    console.log(value);
    API.searchFromLiquor(value).then((results) => {
      setdata(results.data);
    });
  };
  // API call to get selected drinks details
  const drinkDeets = (id) => {
    API.drinkInfo(id).then((results) => {
      setDeetsSearch(results.data);
    });
  };

  const surpriseCocktail = () => {
    console.log("where is my drink?");
    API.totalSurprise().then((results) => {
      setdata(results.data);
    });
  };
  return (
    <div>
      <h1>Don't know what you want?</h1>
      <RandomButtons
        data={data}
        searchLiquor={searchLiquor}
        drinkDeets={drinkDeets}
        surpriseCocktail={surpriseCocktail}
      />
      <DrinkDetails details={deetsSearch} />
    </div>
  );
};

export default Roulette;
