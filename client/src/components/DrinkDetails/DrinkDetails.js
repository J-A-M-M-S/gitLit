import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./DrinkDetails.css";
import Favorite from "../Favorite/Favorite.js";

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
    <Container className="drinkDetails">
      <Row id="drinkName">
        <h3>{details.name}</h3>
      </Row>
      <Row id="favBtn">
        <Favorite favDetails={details} />
      </Row>
      <Row>
        <Col id="drinkImage">
          <img src={details.image} alt={details.name} />
        </Col>
        <Col id="drinkInt">
          <Row>
            <p>{details.instructions}</p>
          </Row>
          <Row id="drinkIng">
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DrinkDetails;
