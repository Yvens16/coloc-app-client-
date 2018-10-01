import React from "react";
import { Link } from "react-router-dom";
import ModalSignUp from "./ModalSignUp";

// import { Link } from "react-router-dom";

function Home(props) {
  const { currentUser } = props;
  return (
    <section>
      <h2>Home Page</h2>
      <p>Welcome</p>
      <Link to="/signup">Sign Up now</Link>
      <ModalSignUp />
    </section>
  );
}

export default Home;
