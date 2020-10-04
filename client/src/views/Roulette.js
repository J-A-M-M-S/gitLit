import React, { useState, useEffect } from "react";
import API from "../utils/api";
import RandomButtons from "../components/RandomButtons/RandomButtons";
import DrinkDetails from "../components/DrinkDetails/DrinkDetails";

const Roulette = () => {
  //  Sets state for drink and ingredient searches
  const [data, setdata] = useState([]);
  // const [liquorSearch, setLiquorSearch] = useState("");
  const [deetsSearch, setDeetsSearch] = useState({});

  // useEffect(() => {
  //   API.searchFromLiquor().then((results) => {
  //     setdata(results.data);
  //   });
  // }, []);

  // const handleInputChange = (event) => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { value } = event.target;
  //   setLiquorSearch(value);
  // };
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
  return (
    <div>
      <h1>Don't know what you want?</h1>
      <RandomButtons
        data={data}
        // liquorSearch={liquorSearch}
        // handleInputChange={handleInputChange}
        searchLiquor={searchLiquor}
        drinkDeets={drinkDeets}
      />
      <DrinkDetails details={deetsSearch} />
    </div>
  );
};

export default Roulette;
