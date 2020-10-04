import React from "react";
import "./Hero.css";
import mixology from "../../assets/img/Mixology.jpg";
import roulette from "../../assets/img/roulette.jpg";
import cocktailsearch from "../../assets/img/cocktailsearch.jpg";

const Hero = () => (
  <div className="hero">
    <main>
      <a href="./mixology">
        <img
          alt=" for Mixology page"
          className="ingredImg"
          src={mixology}
        />
      </a>
      <p class="col l8 homeBarText">
        Have ingredients and want to explore what to make? Utilize our
        ingredient search.
      </p>

      <a href="./drinksearch">
        <img
          alt=" for Cocktails page"
          className="cocktailImg"
          src={cocktailsearch}
        />
      </a>
      <p class="col l8 homeBarText">
        Know the name of a cocktail? Search our library for ingredient
        information and steps to create it.
      </p>

      <a href="./roulette">
        <img
          alt=" for Roulette page"
          className="rouletteImg"
          src={roulette}
        />
      </a>
      <p class="col l8 homeBarText">
        Don't know what to drink? Take a gamble with our roulette
        feature. Choose from Vodka, Taquila, Gin, Whiskey, Rum or get
        even riskier with our surprise me feature.
      </p>
    </main>
  </div>
);

export default Hero;
