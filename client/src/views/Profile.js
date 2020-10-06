import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
// import { AiOutlineHeart } from "react-icons/ai";
// import API from "../utils/api";
import FavoriteList from "../components/FavoriteList/FavoriteList";

export const Profile = () => {
  const { user } = useAuth0();
  // const [newListFav, setnewListFav] = useState(false);
  // //function to handle the onclick on favorites button
  // const renderFav = (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   setnewListFav(API.getFav(user.email));
  //   console.log(setnewListFav);
  //   // console.log("The link was clicked.");
  // };

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <FavoriteList />
      </Row>
    </Container>
  );
};

export default Profile;
