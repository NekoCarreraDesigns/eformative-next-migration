import React from "react";
import { Link } from "react-router-dom"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='page-footer'>
      <small className='footer-small-print'>&copy; 2024 eformative</small>
      <br/>
      <Link className='footer-link' to='/about'>About Us</Link>
      <br />
      <Link className='footer-link' to='/admin-login'>Admin Login</Link>
    </footer>
  );
};

export default Footer;
