import React, { useState, useEffect } from "react";
import Link  from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
    <nav className={isScrolled ? styles.navbarScrolled : styles.navbar}>
      <div className={styles.innerNavbar}>
        <div className={styles.navbarLinks}>
          <Link
            className={styles.navbarLink}
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={styles.navbarLink}
            href="/market"
            onClick={() => setIsMenuOpen(false)}
          >
            Market
          </Link>
          <Link
            className={styles.navbarLink}
            href="/reviews"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            className={styles.navbarLink}
            href="/sell"
            onClick={() => setIsMenuOpen(false)}
          >
            Sell
          </Link>
        </div>
        <div className={styles.navbarLogoContainer}>
          <Link href="/">
            <img alt="logo" className={styles.navbarLogo} src="/images/eformative-logo-2.png" />
          </Link>
        </div>
        <div className={styles.hamburgerMenu} onClick={handleMenuClick} aria-label={isMenuOpen ? "Close menu": "Open menu"}>
          &#9776; {/* Hamburger icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

