import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import google from "../../assets/img/google.svg";

import styles from "./SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {auth.currentUser ? (
        "You are now logged in"
      ) : (
        <div className={styles.container_form}>
          <form onSubmit={signIn}>
            <h2>Already have an account?</h2>
            <div className={styles.content}>
              <div className={styles.input_field}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.input_field}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.action}>
              <p onClick={() => navigate("/sign-up")}>Register</p>
              <button onClick={(e) => signIn(e)}>Sign in</button>
            </div>{" "}
          </form>
        </div>
      )}
    </>
  );
}

export default SignIn;
