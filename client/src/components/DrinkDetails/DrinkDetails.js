import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    <Container className="drinkDetails">
      <Row>
        <Col>
          <img src={details.image} alt={details.name} />
        </Col>
        <Col>
          <Row>
            <h3>{details.name}</h3>
          </Row>
          <Row>
            <p>{details.instructions}</p>
          </Row>
          <Row>
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
