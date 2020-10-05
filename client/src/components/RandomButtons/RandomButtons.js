import React from "react";
import "./RandomButtons.css";

// Assign on click to each liquor button using the data name as a value to pass into the getCocktail function

function RandomButtons({ searchLiquor, surpriseCocktail }) {
  return (
    <div>
      {/* Totally Random Button*/}
      <button id="surpriseBtn" onClick={() => surpriseCocktail()}>
        Surprise Me
      </button>

      {/* Liquor Based Random Buttons */}
      <button
        id="vodkaBtn"
        value="vodka"
        onClick={(e) => searchLiquor(e.target.value)}
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
