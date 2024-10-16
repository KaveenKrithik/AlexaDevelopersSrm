import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Alexa Developers</div>
      <nav className="nav-links">
        <a href="#home" className="nav-button">Home</a>
        <a href="#Events" className="nav-button">Events</a>
        <a href="#Team" className="nav-button">Our Team</a>
        <a href="#blog" className="nav-button">Blog</a>
        <a href="#Login" className="nav-button">Apply Now</a>
      </nav>
    </header>
  );
};

export default Header;

