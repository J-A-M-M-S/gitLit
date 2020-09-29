import React, { useState, useEffect } from "react";
import API from "../../utils/api";
import { InputGroup, FormControl } from "react-bootstrap";
// add parent function

// create onclick event for search bar
// pull and trim search bar and assign to variable "drink"
// pass variable to the Search function

function Search() {
  // take out the below line after search function is in place.
  // const drink = "margarita";
  const [data, setdata] = useState([]);
  const [drink, setDrink] = useState("");
  const [recipeSearch, setRecipeSearch] = useState("");

  useEffect(() => {
    API.searchDrinks("margarita").then((results) => {
      setdata(results.data);
      // console.log(results);
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
      // console.log(results);
    });
  };

  // add search box and add API to searchbox function.
  return (
    <div>
      <input
        type="text"
        value={recipeSearch}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={getDrink}>
        Submit
      </button>

      {data.map((drink) => (
        <p key={drink.id}>{drink.name}</p>
      ))}
    </div>
  );
}

export default Search;
