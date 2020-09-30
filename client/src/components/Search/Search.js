import React, { useState, useEffect } from "react";
import API from "../../utils/api";

function Search() {
  const [data, setdata] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  useEffect(() => {
    API.searchDrinks("").then((results) => {
      setdata(results.data);
    });
  }, []);

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setRecipeSearch(value);
  };
  // API call to find all cocktails matching input
  const searchCocktail = (e) => {
    e.preventDefault();
    API.searchDrinks(recipeSearch).then((results) => {
      setdata(results.data);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={recipeSearch}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={searchCocktail}>
        Submit
      </button>

      <ul>
        {/* pulls cocktails matching the input and renders them as buttons */}
        {data.map((drink, index) => (
          <li key={index}>
            <button key={drink.id}>{drink.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
