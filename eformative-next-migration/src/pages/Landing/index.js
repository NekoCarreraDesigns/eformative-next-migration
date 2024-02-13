import React from "react";
import styles from "./landing.module.css";
import { useRouter } from 'next/router'
import SignupCTASection from "../../components/SignupCTASection";
import IconsSection from "../../components/Icons";

const Landing = () => {
  let navigate = useRouter();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position:", position)
      console.log("current location:", window.location.href)
      navigate.push("/market");
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.homeHero}>
        <img
          className={styles.heroLogo}
          alt='eformative-logo'
          src='/images/eformative-logo-white.png'
        />
        <h2 className={styles.homePageHeader}>Have Fun, and help the planet!</h2>
        <div className={styles.buttonContainer}>
          <button className='clear-btn-green-border' onClick={getLocation}>
            Find Your Market
          </button>
        </div>
        <IconsSection />
      </div>
      <SignupCTASection />
    </div>
  );
};

export default Landing;
