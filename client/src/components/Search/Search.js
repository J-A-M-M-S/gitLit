import React from "react";

function Search({
  data,
  cocktailSearch,
  handleInputChange,
  searchCocktail,
  drinkDeets,
}) {
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
