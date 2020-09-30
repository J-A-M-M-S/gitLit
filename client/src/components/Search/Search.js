import React, { useState, useEffect } from "react";
import API from "../../utils/api";

function Search() {
  // take out the below line after search function is in place.

  const [data, setdata] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  useEffect(() => {
    API.searchDrinks("margarita").then((results) => {
      setdata(results.data);
    });
  }, []);

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setRecipeSearch(value);
  };

  const getDrink = (e) => {
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
      <button type="submit" onClick={getDrink} data-testid="testClick">
        Submit
      </button>

      {data.map((drink) => (
        <p key={drink.id}>{drink.name}</p>
      ))}
    </div>
  );
}

export default Search;
