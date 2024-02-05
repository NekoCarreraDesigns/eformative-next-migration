import React from "react";
import "./Home.css";
import {useNavigate} from 'react-router-dom'
import SignupCTASection from "../../components/SignupCTASection/SignupCTASection";
import IconsSection from "../../components/Icons/Icons";

const Home = () => {
  let navigate = useNavigate();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position:", position)
      console.log("current location:", window.location.href)
      navigate("/market");
    });
  };

  return (
    <div className='body'>
      <div className='home-hero'>
        <img
          className='hero-logo'
          alt='eformative-logo'
          src='/assets/eformative-logo-white.png'
        />
        <h2 className='home-page-header'>Have Fun, and help the planet!</h2>
        <div className='button-container'>
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

export default Home;
