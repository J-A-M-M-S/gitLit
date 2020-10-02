import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Search.css";

function Search({
  data,
  cocktailSearch,
  handleInputChange,
  searchCocktail,
  drinkDeets,
}) {
  return (
<<<<<<< HEAD
    <div>
      <input
        type="text"
        value={cocktailSearch}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={searchCocktail} data-testid="testClick">
        Submit
      </button>

      <ul>
        {/* pulls cocktails matching the input and renders them as buttons */}
        {data.map((drink, index) => (
          <li key={index}>
=======
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
>>>>>>> origin
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
