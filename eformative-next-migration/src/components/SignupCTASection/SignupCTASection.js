import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignupCTASection.css";

const SignupCTASection = () => {
  let navigate = useNavigate();

  const signUpRedirect = () => {
    let signupPath = `/signup`;
    navigate(signupPath);
  };

  return (
    <div className='signup-cta-section'>
      <div className='container'>
        <div className='two-columns-section'>
          <div className='left-column'>
            <img
              className='signup-cta-image'
              alt='Couple on eScooter'
              src='/assets/emotoscooter-cut.png'
            />
          </div>
          <div className='right-column'>
            <h2 className='cta-header'>Join the Green Marketplace</h2>
            <p className='cta-body'>
              Contribute to a sustainable future by buying and selling electric
              products with ease.
            </p>
            <button className='signup-cta-button' onClick={signUpRedirect} aria-label="button to join the marketplace">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCTASection;
