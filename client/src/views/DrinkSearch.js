import React, { useState, useEffect } from "react";
import API from "../utils/api";
import Search from "../components/Search/Search";
import DrinkDetails from "../components/DrinkDetails/DrinkDetails";

const DrinkSearch = () => {
  const [data, setdata] = useState([]);
  const [cocktailSearch, setCocktailSearch] = useState("");
  const [deetsSearch, setDeetsSearch] = useState({});

  useEffect(() => {
    API.searchDrinks().then((results) => {
      setdata(results.data);
    });
  }, []);

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setCocktailSearch(value);
  };
  // API call to find all cocktails matching input
  const searchCocktail = (e) => {
    e.preventDefault();
    API.searchDrinks(cocktailSearch).then((results) => {
      setdata(results.data);
    });
  };

  const drinkDeets = (id) => {
    API.drinkInfo(id).then((results) => {
      console.log(results);
      setDeetsSearch(results.data);
    });
  };
  return (
    <div>
      <Search
        data={data}
        cocktailSearch={cocktailSearch}
        handleInputChange={handleInputChange}
        searchCocktail={searchCocktail}
        drinkDeets={drinkDeets}
      />
      <DrinkDetails details={deetsSearch} />
    </div>
  );
};

export default DrinkSearch;
