import React, { useState } from "react";
import API from "../utils/api";
import RandomButtons from "../components/RandomButtons/RandomButtons";
import DrinkDetails from "../components/DrinkDetails/DrinkDetails";

const Roulette = () => {
  //  Sets state for drink and ingredient searches
  const [data] = useState([]);
  const [surpriseSearch, setSurpriseSearch] = useState({});

  // API call to find all cocktails matching input
  const searchLiquor = (value) => {
    API.searchFromLiquor(value).then((results) => {
      API.drinkInfo(results.data).then((results) => {
        setSurpriseSearch(results.data);
      });
    });
  };

  const surpriseCocktail = () => {
    API.totalSurprise().then((results) => {
      setSurpriseSearch(results.data);
    });
  };
  return (
    <div>
      <h1>Don't know what you want?</h1>
      <RandomButtons
        data={data}
        searchLiquor={searchLiquor}
        surpriseCocktail={surpriseCocktail}
      />
      <DrinkDetails details={surpriseSearch} />
    </div>
  );
};

export default Roulette;
