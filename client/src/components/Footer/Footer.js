import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo" />
<<<<<<< HEAD
      <h3>Like, Follow, Subscribe</h3>
      <a href="https://www.youtube.com/" className="youtube social" data-testid="testClick">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
=======
      <h7>J-A-M-M-S</h7>
>>>>>>> origin
      <a
        href="https://github.com/J-A-M-M-S/gitLit"
        target="blank"
        className="GitHub social"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
    </footer>
  );
};

export default Footer;
