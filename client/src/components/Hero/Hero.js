import React from "react";
import "./Hero.css";

const Hero = () => (
  <div className="hero">
    <main>
      <a href="./ingredientsearch.html">
        <img
          alt=" for Mixology page"
          className="ingredImg"
          src="../../assets/img/Mixology.jpg"
        />
      </a>
      <p class="col l8 homeBarText">
        Have ingredients and want to explore what to make? Utilize our
        ingredient search.
      </p>

      <a href="./drinksearch.html">
        <img
          alt=" for Cocktails page"
          className="cocktailImg"
          src="../../assets/img/funDrinks.jpg"
          style="width: 125px; height: 125px;"
        />
      </a>
      <p class="col l8 homeBarText">
        Know the name of a cocktail? Search our library for ingredient
        information and steps to create it.
      </p>

      <a href="./roulette.html">
        <img
          alt=" for Roulette page"
          className="rouletteImg"
          src="../../assets/img/roulette.jpg"
          style="width: 125px; height: 125px;"
        />
      </a>
      <p class="col l8 homeBarText">
        Don't know what to drink? Take a gamble with our roulette
        feature. Choose from Vodka, Taquila, Gin, Whiskey, Rum or get
        even riskier with our surprise me feature.
      </p>

      <a href="./thepub.html">
        <img
          alt=" for Pub page"
          className="pubImg"
          src="../../assets/img/pintglass.jpg"
          style="width: 125px; height: 125px;"
        />
      </a>
      <p class="col l8 homeBarText">
        Not a cocktail person? Perhaps you would enjoy a refreshing
        brew. Let us know how potent you like your beer and we'll make
        a suggestion.
      </p>
    </main>
  </div>
);

export default Hero;
