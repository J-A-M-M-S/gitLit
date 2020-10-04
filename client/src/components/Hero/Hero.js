import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";
import mixology from "../../assets/img/Mixology.jpg";
import roulette from "../../assets/img/roulette.jpg";
import cocktailsearch from "../../assets/img/cocktailsearch.jpg";

const Hero = () => (
  <Container>
    <div className="hero">
      <main>
        <Row>
          <a href="./mixology">
            <img
              alt=" for Mixology page"
              className="ingredImg"
              src={mixology}
            />
          </a>
          <p className="col l8 homeBarText">
            Have ingredients and want to explore what to make? Utilize
            our ingredient search.
          </p>
        </Row>
        <Row>
          <a href="./drinksearch">
            <img
              alt=" for Cocktails page"
              className="cocktailImg"
              src={cocktailsearch}
            />
          </a>
          <p className="col l8 homeBarText">
            Know the name of a cocktail? Search our library for
            ingredient information and steps to create it.
          </p>
        </Row>
        <Row>
          <a href="./roulette">
            <img
              alt=" for Roulette page"
              className="rouletteImg"
              src={roulette}
            />
          </a>
          <p className="col l8 homeBarText">
            Don't know what to drink? Take a gamble with our roulette
            feature. Choose from Vodka, Taquila, Gin, Whiskey, Rum or
            get even riskier with our surprise me feature.
          </p>
        </Row>
      </main>
    </div>
  </Container>
);

export default Hero;
