import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "universal-cookie"
import styles from "./sell.module.css";

const Sell = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("")
  let navigate = useRouter();

  const signUpRedirect = () => {
    let signupRedirectPath = `/signup`;
    navigate.push(signupRedirectPath);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value)
  }
  const cookies = new Cookies();
  const userSignIn = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/user/sign-in", {
        username,
        password: userPassword,
      });

      if (data.message === "Successful login!") {
        cookies.set("users", data.users, {path:"/"});
        console.log(data)
        navigate("/seller");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        console.error("Invalid username or password", err);
      } else {
        console.error("You must enter a username and password into each field",err);
      }
    }
  };

  return (
    <>
      <div className={`heroSection ${styles.sellContainer}`}>
        <h1 className={styles.sellPageHeader}>Sell</h1>
        {/* <p className='sell-page-paragraph'>
          If you are a returning seller, please log in here.
        </p> */}
          <div className={styles.sellFormDiv}>
            <form onSubmit={userSignIn} className='sell-page-form'>
              <input
                className={`${styles.usernameInput} text-input-white}`}
                type='text'
                placeholder='please type username '
                name="user name"
                aria-label="username input for login"
                value={username}
                onChange={handleUsernameChange}></input>
              <br />
              <input
                className={`${styles.userPasswordInput} text-input-white`}
                placeholder='please enter password'
                id='user-password'
                name="user-password"
                type='password'
                aria-label="input for user password"
                value={userPassword}
                onChange={handlePasswordChange}></input>
              <br />
              <button className={`clear-btn-green-border ${styles.userLoginSubmitButton}`} type='submit' aria-label="click button to login">
                Login
              </button>
            </form>
          </div>
          <p className={styles.newSellerParagraph}>New sellers please sign up here.</p>
          <button aria-label="button to signup to the site" className={`clear-btn-sm clear-btn-green-border ${styles.userSignupRedirect}`} onClick={signUpRedirect}>
            signup
          </button>
      </div>
    </>      
  );
};

export default Sell;
