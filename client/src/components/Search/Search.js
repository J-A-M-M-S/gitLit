import React, {useEffect, useState} from "react";
import DrinkSearch from "../../views/DrinkSearch"
import API from "../../utils/api";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import "./Search.css";

function Search({
  data,
  cocktailSearch,
  handleInputChange,
  searchCocktail,
  drinkDeets,
}) {

  const [singleSelections, setSingleSelections] = useState([]);

  useEffect(()=>{
    API.allCocktailNames().then((results) => {
      setSingleSelections(results.data);
    });
    console.log(results.data)
  },[])

  return (
    <div className="searchRes">
      <Container>
        <Row>
          <Col id="searchBox">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                type="text"
                value={cocktailSearch}
                onChange={handleInputChange}
              />
            </InputGroup>
            <button
              id="subBtn"
              type="submit"
              onClick={searchCocktail}
            >
              Submit
            </button>
          </Col>

          <Col id="searchInfo">
            <ul>
              {/* pulls cocktails matching the input and renders them as buttons */}
              {data.map((drink, index) => (
                <li key={index}>
                  <button
                    id="drinkBtn"
                    key={drink.id}
                    onClick={() => drinkDeets(drink.id)}
                  >
                    {drink.name}
                  </button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
