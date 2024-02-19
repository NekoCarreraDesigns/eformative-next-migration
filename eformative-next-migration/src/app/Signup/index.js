import {React, useState} from "react";
import axios from "axios";
import styles from "./signup.module.css";

import { useRouter } from "next/router";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  let navigate = useRouter();
  let postItemPath = `/post-item`;

  const userPostSignUp = (event) => {
    event.preventDefault()
    try {
      const response = axios.post("/seller/sign-up", {
        fullName: fullName,
        username: username,
        email: email,
        password: password,
        blocked: false,
      });
      console.log("Signup successful:", response);
      navigate(postItemPath);
    } catch (error) {
      console.log("Signup failed:", error.response);
      alert("Signup failed. Please check the console for details.");
    }
  };

  return (
    <div className={`hero-section ${signup-container}`}>
      <h1 className={styles.signupPageHeader}>Please Sign Up</h1>
      <div className={styles.signupFormContainer}>
        <form onSubmit={userPostSignUp} className={styles.signupForm}>
          <input
            className={`${fullNameInput} text-input-white`}
            placeholder="Please enter full name"
            name="full name"
            aria-label="full name input for seller signup"
            onChange={(event) => setFullName(event.target.value)}
          />
          <br />
          <input
            className={`${userNameInput} text-input-white`}
            placeholder="Please enter a username"
            name="user name"
            aria-label="username input for seller signup"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <input
            type="text"
            className={`${emailInput} text-input-white`}
            placeholder="Please enter an email"
            name="user email"
            aria-label="email input for seller signup"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            type="password"
            className={`${passwordInput} text-input-white`}
            placeholder="Please enter a password"
            name="password"
            aria-label= "user password input for seller signup"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button className={`clear-btn-green-border ${userSignupButton}`} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
