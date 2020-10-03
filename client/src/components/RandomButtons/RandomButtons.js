import React from "react";
import "./RandomButtons.css";

function RandomButtons() {
  return (
    <div>
      <button id="surpriseBtn" type="submit">
        Surprise Me
      </button>
      <button id="vodkaBtn" type="submit">
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
