import React, { useState, useEffect } from "react";
import API from "../../utils/api";

function Search() {
  const [data, setdata] = useState([]);
  const [cocktailSearch, setCocktailSearch] = useState("");
  const [deetsSearch, setDeetsSearch] = useState("");

  useEffect(() => {
    API.searchDrinks("").then((results) => {
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
    });
  };

  return (
    <div>
      <input
        type="text"
        value={cocktailSearch}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={searchCocktail}>
        Submit
      </button>

      <ul>
        {/* pulls cocktails matching the input and renders them as buttons */}
        {data.map((drink, index) => (
          <li key={index}>
            <button
              key={drink.id}
              onClick={() => drinkDeets(drink.id)}
            >
              {drink.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
