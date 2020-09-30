import React from "react";
import "./DrinkDetails.css";

function DrinkDetails({ details }) {
  const steps = [];
  if (details && details.ing1) {
    for (let i = 1; i < 16; i++) {
      const ing = details["ing" + i];
      if (ing) {
        const measure = details["measure" + i] || "";
        steps.push({ id: i, ing: ing, measure: measure });
      }
    }
    console.log(steps);
  }

  return (
    <div className="drinkDetails">
      <img src={details.image} />
      <ol>
        {steps.map(({ id, ing, measure }) => {
          return (
            <li key={id}>
              <span>{ing}&nbsp;</span>
              <span>{measure}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default DrinkDetails;
