import React from "react";
import "./RandomButtons.css";

// Assign on click to each liquor button using the data name as a value to pass into the getCocktail function

function RandomButtons({ searchLiquor, surpriseCocktail }) {
  return (
    <div id="barBtn">
      {/* Totally Random Button*/}
      <button
        id="surpriseBtn"
        className="bullet"
        onClick={() => surpriseCocktail()}
      >
        Surprise Me
      </button>

      {/* Liquor Based Random Buttons */}
      <button
        id="vodkaBtn"
        className="bullet"
        value="vodka"
        onClick={(e) => searchLiquor(e.target.value)}
      >
        Vodka
      </button>
      <button
        id="whiskeyBtn"
        className="bullet"
        value="whiskey"
        onClick={(e) => searchLiquor(e.target.value)}
      >
        Whiskey
      </button>
      <button
        id="tequilaBtn"
        className="bullet"
        value="tequila"
        onClick={(e) => searchLiquor(e.target.value)}
      >
        Tequila
      </button>
      <button
        id="rumBtn"
        className="bullet"
        value="rum"
        onClick={(e) => searchLiquor(e.target.value)}
      >
        Rum
      </button>
    </div>
  );
}
export default RandomButtons;
