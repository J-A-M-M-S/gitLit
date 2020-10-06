import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/api";

function FavoriteList({ drinkDeets }) {
  const [newListFav, setnewListFav] = useState([]);
  const { user } = useAuth0();
  useEffect(() => {
    API.getFav(user.email).then((results) => {
      setnewListFav(results.data);
      //   console.log("favuser", user.email);
      //   console.log("favresults", results);
      //   console.log("fav data", newListFav);
    });
  }, []);
  console.log("fav data", newListFav);
  //   console.log(newListFav);
  //   setnewListFav(API.getFav(user.email));
  //   console.log(setnewListFav);
  //   console.log(results);
  return (
    <div>
      <h2 id="title" style={{ justifyContent: "center" }}>
        Favorites List
      </h2>
      <ul>
        {/* pulls cocktails matching the input and renders them as buttons */}
        {newListFav.map((drink, index) => (
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
    </div>
  );
}
export default FavoriteList;
