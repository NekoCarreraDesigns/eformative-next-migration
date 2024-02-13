import React from "react";
import  Link  from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <small className={styles.footerSmallPrint}>&copy; 2024 eformative</small>
      <br/>
      <Link className={styles.footerLink} href="/about">About Us</Link>
      <br />
      <Link className={styles.footerLink} href="/admin-login">Admin Login</Link>
    </footer>
  );
};

export default Footer;
