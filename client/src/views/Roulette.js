import React, { useState } from "react";
import API from "../utils/api";
import RandomButtons from "../components/RandomButtons/RandomButtons";
import DrinkDetails from "../components/DrinkDetails/DrinkDetails";

const Roulette = () => {
  //  Sets state for drink and ingredient searches
  const [data, setdata] = useState([]);
  // const [deetsSearch, setDeetsSearch] = useState({});
  const [surpriseSearch, setSurpriseSearch] = useState({});

  // API call to find all cocktails matching input
  const searchLiquor = (value) => {
    console.log(value);
    API.searchFromLiquor(value).then((results) => {
      setdata(results.data);
    });
  };
  // API call to get selected drinks details
  // const drinkDeets = (id) => {
  //   API.drinkInfo(id).then((results) => {
  //     setDeetsSearch(results.data);
  //   });
  // };

  const surpriseCocktail = () => {
    API.totalSurprise().then((results) => {
      setSurpriseSearch(results.data);
      console.log(surpriseSearch);
    });
  };
  return (
    <div>
      <h1>Don't know what you want?</h1>
      <RandomButtons
        data={data}
        searchLiquor={searchLiquor}
        // drinkDeets={drinkDeets}
        surpriseCocktail={surpriseCocktail}
      />
      <DrinkDetails details={surpriseSearch} />
    </div>
  );
};

export default Roulette;
