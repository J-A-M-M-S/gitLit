import React, { useState } from "react";
import "./Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/api";
//import DrinkDetails from "../components/DrinkDetails/DrinkDetails";
import { useAuth0 } from "@auth0/auth0-react";

function Favorite(favDetails) {
  const [newFav, setnewFav] = useState(false);
  const { user } = useAuth0();
  //function to handle the onclick on favorites button
  const saveFavorite = (e) => {
    e.preventDefault();
    console.log(user);
    setnewFav(API.saveFav(user.sub, favDetails.favDetails.name));
    // console.log("The link was clicked.");
  };
  if (newFav) {
    return (
      <button onClick={saveFavorite}>
        <FontAwesomeIcon icon={faStar} size="2x" />
      </button>
    );
  }
  return (
    <button onClick={saveFavorite}>
      <FontAwesomeIcon icon={faStar} size="1x" />
    </button>
  );
}

export default Favorite;
