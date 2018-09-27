import React from "react";
import SignUp from "./SignUp";

// import { Link } from "react-router-dom";

function Home(props) {
  return (
    <section>
      <h2>Home Page</h2>
      <p>Welcome</p>
      <SignUp />
    </section>
  );
}

export default Home;
