import React, { useRef } from "react"; // we use the useRef() to keep track of email and password without causing re-renders.
import "./SignIn.css";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signin">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign In</button>
        <h6>
          First time playing? 
          <span className="signin__link" onClick={signUp}> Sign Up</span>
        </h6>
      </form>
    </div>
  );
};

export default SignIn;
