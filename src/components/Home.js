import React from "react";
import { auth } from "../firebase";

const Home = () => {
  return (
    <div>
      Welcome to Home (game board) Page
      <p>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </p>
    </div>
  );
};

export default Home;
