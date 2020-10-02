import React from "react";
import "./Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/api";
//import DrinkDetails from "../components/DrinkDetails/DrinkDetails";
// import { useAuth0 } from "@auth0/auth0-react";

function Favorite(favDetails) {
  //function to handle the onclick on favorites button
  const saveFavorite = (e) => {
    e.preventDefault();
    API.saveFav(favDetails);
    console.log("The link was clicked.");
  };

  return (
    <button onClick={saveFavorite}>
      <FontAwesomeIcon icon={faStar} size="1x" />
    </button>
  );
}

export default Favorite;
