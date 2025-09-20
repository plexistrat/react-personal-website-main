import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by Sakis Staikos</p>

      <div className="footer-socials">
        <a
          href="https://github.com/plexistrat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sakis-staikos-47a134319/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:drosostaikos@yahoo.gr">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-email">drosostaikos@yahoo.gr</p>
      <p>All rights reserved © 2025 Sakis Staikos</p>
    </footer>
  );
};

export default Footer;
