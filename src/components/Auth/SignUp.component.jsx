import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./SignUp.module.scss";

function SignIn() {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  let navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("1");
  };

  return (
    <div className={styles.container_form}>
      <form onSubmit={signUp}>
        <h2>Create an account</h2>
        <div className={styles.content}>
          <div className={styles.input_field}>
            <input
              type="email"
              placeholder="Enter your email"
              value={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.value)}
            />
          </div>
          <div className={styles.input_field}>
            <input
              type="password"
              placeholder="Enter your password"
              value={passwordSignUp}
              onChange={(e) => setPasswordSignUp(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.action}>
          <button>Register</button>
          <p
            className={styles.signInRedirect}
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
