import React, { useState, useEffect } from "react";
import API from "../utils/api";

function Search() {
  const drink = "margarita";
  const [data, setdata] = useState([]);
  useEffect(() => {
    API.searchDrinks(drink).then((results) => {
      setdata(results.data);
    });
  }, []);
  // add search box and add API to searchbox function.
  return (
    <div>
      {data.map((drink) => (
        <p key={drink.id}>{drink.name}</p>
      ))}
    </div>
  );
}

export default Search;
