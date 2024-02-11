import React, { useState, useEffect } from "react";
import  Link from "next/link";
// import "./index.css";

export default function Navbar () {
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
    <>
      <div className="inner-navbar">
        <div className="navbar-links">
          <Link href="/Landing"  className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/Market"  className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Market
          </Link>
          <Link href="/Reviews"  className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Reviews
          </Link>
          <Link href="/Sell"  className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Sell
          </Link>
        </div>
        <div className="navbar-logo-container">
          
            <img alt="logo" className="navbar-logo" src="/images/eformative-logo-2.png" />
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick} aria-label={isMenuOpen ? "Close menu": "Open menu"}>
          &#9776; {/* Hamburger icon */}
        </div>
      </div>
      </>
  );
};


