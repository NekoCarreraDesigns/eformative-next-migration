import React from "react";
import { useRouter } from "next/router";
import styles from "./SignupCTASection.module.css";

const SignupCTASection = () => {
  let navigate = useRouter();

  const signUpRedirect = () => {
    let signupPath = `/signup`;
    navigate.push(signupPath);
  };

  return (
    <div className={styles.signupSection}>
      <div className={styles.container}>
        <div className={styles.twoColumnsSection}>
          <div className={styles.leftColumn}>
            <img
              className={styles.signupCtaImage}
              alt='Couple on e-Scooter'
              src='/images/emotoscooter-cut.png'
            />
          </div>
          <div className={styles.rightColumn}>
            <h2 className={styles.signupCtaHeader}>Join the Green Marketplace</h2>
            <p className={styles.signupCtaBody}>
              Contribute to a sustainable future by buying and selling electric
              products with ease.
            </p>
            <button className={styles.signupCtaButton} onClick={signUpRedirect} aria-label="button to join the marketplace">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCTASection;
