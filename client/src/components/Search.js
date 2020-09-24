import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { InputGroup, FormControl } from "react-bootstrap";

function Search() {
  const drink = "margarita";
  const [data, setdata] = useState([]);
  useEffect(() => {
    API.searchDrinks(drink).then((results) => {
      setdata(results.data);
      console.log(results);
    });
  }, []);

  // add search box and add API to searchbox function.
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            Search Cocktail
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="name a drink"
          aria-label="name a drink"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      {data.map((drink) => (
        <p key={drink.id}>{drink.name}</p>
      ))}
    </div>
  );
}

export default Search;
