import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsMenuOpen(false);
    if (offset > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="inner-navbar">
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`navbar-link ${location.pathname === "/market" ? "active" : ""}`}
            to="/market"
            onClick={() => setIsMenuOpen(false)}
          >
            Market
          </Link>
          <Link
            className={`navbar-link ${location.pathname === "/reviews" ? "active" : ""}`}
            to="/reviews"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            className={`navbar-link ${location.pathname === "/sell" ? "active" : ""}`}
            to="/sell"
            onClick={() => setIsMenuOpen(false)}
          >
            Sell
          </Link>
        </div>
        <div className="navbar-logo-container">
          <Link to="/">
            <img alt="logo" className="navbar-logo" src="/assets/eformative-logo-2.png" />
          </Link>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick} aria-label={isMenuOpen ? "Close menu": "Open menu"}>
          &#9776; {/* Hamburger icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

