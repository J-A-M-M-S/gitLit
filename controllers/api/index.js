const router = require("express").Router();
const axios = require("axios");
// const burgerRoutes = require('./burger');
// const employeeRoutes = require('./employees');
// Book routes
// router.use('/burger', burgerRoutes);
// router.use('/employees', employeeRoutes);
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
module.exports = router;
