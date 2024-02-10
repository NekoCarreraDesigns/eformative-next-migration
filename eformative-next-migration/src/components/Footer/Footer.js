import React from "react";
import  Link  from "next/link"

const Footer = () => {
  return (
    <footer className='page-footer'>
      <small className='footer-small-print'>&copy; 2024 eformative</small>
      <br/>
      <Link className='footer-link' href="/about">About Us</Link>
      <br />
      <Link className='footer-link' href="/admin-login">Admin Login</Link>
    </footer>
  );
};

export default Footer;
