import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/api";

function FavoriteList() {
  const [newListFav, setnewListFav] = useState([]);
  const { user } = useAuth0();
  useEffect(() => {
    API.getFav(user.name).then((results) => {
      setnewListFav(results.data);
      console.log("favuser", user.name);
      console.log("favresults", results);
    });
  }, []);
  //   console.log(newListFav);
  //   setnewListFav(API.getFav(user.email));
  //   console.log(setnewListFav);
  //   console.log(results);
  return <div>test</div>;
}
export default FavoriteList;
