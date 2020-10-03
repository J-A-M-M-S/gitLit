import React from "react";
import "./RandomButtons.css";

// Assign on click to each liquor button using the data name as a value to pass into the getCocktail function

function RandomButtons({
  data,
  liquorSearch,
  handleInputChange,
  searchLiquor,
  drinkDeets,
}) {
  return (
    <div>
      <button id="surpriseBtn" type="submit">
        Surprise Me
      </button>
      <button
        id="vodkaBtn"
        type="submit"
        onClick={searchLiquor}
        liquor={liquorSearch}
      >
        Vodka
      </button>
      <button id="whiskeyBtn" type="submit">
        Whiskey
      </button>
      <button id="tequilaBtn" type="submit">
        Tequila
      </button>
      <button id="rumBtn" type="submit">
        Rum
      </button>
    </div>
  );
}
export default RandomButtons;
