const router = require("express").Router();
const axios = require("axios");

// ATTEMPT AT SETTING UP CALL TO GET ALL POSS COCKTAIL NAMES TO USE IN A DROP DOWN ON DRINK SEARCH
// Currently routed for homepage but that will need to change

// API call to get all possible cocktails to use in Drink Search drop down
router.get("/", ({ params }, res) => {
  const allCocktailNames = [];
  axios
    .get(
      "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=",
    )
    .then((results) => {
      allCocktailNames.push(results.strDrink);
      for (let i = 0; i < allCocktailNames.length; i++) {
        let cocktailOption = allCocktailNames[i].strDrink;
        // render all cocktail names to drop list
        // TODO: Convert from jquery and create a dropdown with id allPossCocktails
        // $("#allPossCocktails").append(`<option value="${cocktailOption}"> </option>`);
      }
      res.json(allCocktailNames);
    });
});

// all drinks which match search input
router.get("/search/:value", ({ params }, res) => {
  const drinksarry = [];
  const alldrinks = [];
  const cocktailVal = params.value;
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${cocktailVal}`,
    )
    .then((results) => {
      drinksarry.push(results);
      const data = results.data;
      for (let index = 0; index < data.drinks.length; index++) {
        const element = data.drinks[index];
        const drink = { id: element.idDrink, name: element.strDrink };
        alldrinks.push(drink);
      }
      res.json(alldrinks);
    });
});
// complete list of ingredients for selected cocktail
router.get("/search/drinksearch/:id", ({ params }, res) => {
  const selectDrink = params.id;
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${selectDrink}`,
    )
    .then((results) => {
      const element = results.data.drinks[0];
      const drinkDetails = {
        id: element.idDrink,
        name: element.strDrink,
        instructions: element.strInstructions,
        image: element.strDrinkThumb,
        ing1: element.strIngredient1,
        ing2: element.strIngredient2,
        ing3: element.strIngredient3,
        ing4: element.strIngredient4,
        ing5: element.strIngredient5,
        ing6: element.strIngredient6,
        ing7: element.strIngredient7,
        ing8: element.strIngredient8,
        ing9: element.strIngredient9,
        ing10: element.strIngredient10,
        ing11: element.strIngredient11,
        ing12: element.strIngredient12,
        ing13: element.strIngredient13,
        ing14: element.strIngredient14,
        ing15: element.strIngredient15,
        measure1: element.strMeasure1,
        measure2: element.strMeasure2,
        measure3: element.strMeasure3,
        measure4: element.strMeasure4,
        measure5: element.strMeasure5,
        measure6: element.strMeasure6,
        measure7: element.strMeasure7,
        measure8: element.strMeasure8,
        measure9: element.strMeasure9,
        measure10: element.strMeasure10,
        measure11: element.strMeasure11,
        measure12: element.strMeasure12,
        measure13: element.strMeasure13,
        measure14: element.strMeasure14,
        measure15: element.strMeasure15,
      };
      res.json(drinkDetails);
    });
});

// API call to get random cocktail based on selected liquor
router.get("/roulette/:liquor", ({ params }, res) => {
  const liquorChoice = params.liquor;
  const possibleDrinks = [];
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${liquorChoice}`,
    )
    .then((results) => {
      console.log(results.drinks);
      possibleDrinks = results.drinks;
      const data = results.data;
      // Randomly chooses a cocktail from the array of drinks containing that liquor
      var randomCocktail =
        possibleDrinks[
          Math.floor(Math.random() * possibleDrinks.length)
        ];
      // Target ID
      let randomCocktailID = randomCocktail.idDrink;
      // // Passes Cocktail ID to drink deets function
      drinkDeets(randomCocktailID);
      res.json(possibleDrinks);
    });
});

// API call to get totally random cocktail
router.get("/roulette/random", (res) => {
  console.log("calling random drink");
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((results) => {
      let randomSurprise = response.drinks[0].strDrink;
      const data = results.data;
      // Target ID
      let randomSurpriseID = randomSurprise.idDrink;
      console.log(randomSurprise);
      // // Passes Cocktail ID to drink deets function
      drinkDeets(randomSurpriseID);
      res.json(randomSurprise);
    });
});

module.exports = router;
