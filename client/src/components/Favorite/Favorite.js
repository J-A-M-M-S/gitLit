import React, { useState, useEffect } from "react";
import "./Favorite.css";
import API from "../../utils/api";

function Favorite() {
  const [setdata] = useState([]);
  const [favorite, setFavorite] = useState("");

  // const handleInputChange = (event) => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { value } = event.target;
  //   setFavorite(value);
  // };

  const saveFav = () => {
    API.saveFav(favorite).then((results) => {
      setdata(results.data);
    });
  };

  return (
    <div>
      <i class="far fa-star">
        <button type="fav" onClick={saveFav}></button>
      </i>
    </div>
  );
}

export default Favorite;
