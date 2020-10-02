import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo" />
      <h7>J-A-M-M-S</h7>
      <a
        href="https://github.com/J-A-M-M-S/gitLit"
        className="GitHub social"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
    </footer>
  );
};

export default Footer;
