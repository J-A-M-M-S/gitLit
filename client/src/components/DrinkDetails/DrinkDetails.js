import React from "react";
import "./DrinkDetails.css";

//Concatinates ingredients and measurements then pushes them into an array before rendering
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
    // console.log(steps);
  }

  return (
    <div className="drinkDetails">
      <h3>{details.name}</h3>
      <img src={details.image} alt={details.name} />
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
