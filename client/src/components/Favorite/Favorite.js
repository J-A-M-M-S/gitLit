import React from "react";
import "./Favorite.css";

function Favorite(props) {
  return (
    <button
      onClick={props.onClick}
      className={`fav-btn ${props["data-value"]}`}
      {...props}
    />
  );
}

export default Favorite;
