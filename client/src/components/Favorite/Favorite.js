import React, { useState } from "react";
import "./Favorite.css";
import API from "../../utils/api";
//import DrinkDetails from "../components/DrinkDetails/DrinkDetails";
import { useAuth0 } from "@auth0/auth0-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Favorite.css";

function Favorite(favDetails) {
  const [newFav, setnewFav] = useState(false);
  const { user } = useAuth0();
  //function to handle the onclick on favorites button
  const saveFavorite = (e) => {
    e.preventDefault();
    console.log(user);
    setnewFav(
      API.saveFav(
        user.email,
        favDetails.favDetails.name,
        favDetails.favDetails.image,
      ),
    );
    // console.log("The link was clicked.");
  };
  if (newFav) {
    return (
      <button id="favBtn" onClick={saveFavorite}>
        <AiFillHeart />
      </button>
    );
  }
  return (
    <button id="favBtn" onClick={saveFavorite}>
      <AiOutlineHeart />
    </button>
  );
}

export default Favorite;
