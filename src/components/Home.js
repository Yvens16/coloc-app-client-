import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function Home(props) {
  const { currentUser } = props;
  return (
    <section className="home">
      <h2>Home Page</h2>
      <p>Welcome</p>
    </section>
  );
}

export default Home;
