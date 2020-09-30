import React from "react";
import "./Favorite.css";
import API from "../../utils/api";

function Favorite(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <button
      onClick={API.saveFav(props)}
      className={`fav-btn ${props["data-value"]}`}
      {...props}
    >
      submit
    </button>
  );
}

// function Favorite(props) {
//   return (
//     <button
//       onClick={API.saveFav(props)}
//       className={`fav-btn ${props["data-value"]}`}
//       {...props}
//     >
//       submit
//     </button>
//   );
// }

export default Favorite;
