import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ scrollTo }) => {
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  const handleBurgerClick = () => setIsBurgerOn((prev) => !prev);

  return (
    <>
      {/* Overlay */}
      {isBurgerOn && (
        <div className="overlay" onClick={handleBurgerClick}></div>
      )}

      <nav className="navbar">
        {/* Logo */}
        <a href="/">
          <img src="/logo.png" alt="Logo" />
        </a>

        {/* Desktop buttons */}
        <div className="buttons">
          <button onClick={() => scrollTo("About")}>About</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        {/* Burger icon */}
        <button className="burger" onClick={handleBurgerClick}>
          <CiMenuBurger />
        </button>
      </nav>

      {/* Burger menu */}
      <div className={`burgerPage ${isBurgerOn ? "open" : ""}`}>
        <button className="closeButton" onClick={handleBurgerClick}>
          X
        </button>
        <button
          onClick={() => {
            scrollTo("About");
            handleBurgerClick();
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            scrollTo("projects");
            handleBurgerClick();
          }}
        >
          Projects
        </button>
        <button
          onClick={() => {
            scrollTo("contact");
            handleBurgerClick();
          }}
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default Navbar;
