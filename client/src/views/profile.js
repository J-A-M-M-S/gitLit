// import React from "react";
// import { Container } from "react-bootstrap";

// export const Profile = () => {
// 	return (
// 		<Container className="mb-5">
// 			<h1>Profile</h1>
// 			<p>
// 				You use will use an ID Token to get the profile information of a
// 				logged-in user. <strong>This route should be private</strong>.
// 			</p>
// 		</Container>
// 	);
// };

// export default Profile;

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Highlight } from "../components/Index";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user } = useAuth0();
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
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
};

export default Profile;
