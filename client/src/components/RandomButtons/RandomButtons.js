import React from "react";
import "./RandomButtons.css";

// Assign on click to each liquor button using the data name as a value to pass into the getCocktail function

function RandomButtons({
  liquorSearch,
  handleInputChange,
  searchLiquor,
  totalSurprise,
}) {
  return (
    <div>
      {/* Totally Random Button*/}
      <button id="surpriseBtn" type="submit" onClick={totalSurprise}>
        Surprise Me
      </button>

      {/* Liquor Based Random Buttons */}
      <button
        id="vodkaBtn"
        type="submit"
        onClick={searchLiquor}
        value={liquorSearch}
        onChange={handleInputChange}
      >
        Vodka
      </button>
      {/* Will mimic the vodka button once that is working */}
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
