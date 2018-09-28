import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function Home(props) {
  return (
    <section>
      <h2>Home Page</h2>
      <p>Welcome</p>
      <Link to="/signup">Sign Up now</Link>
    </section>
  );
}

export default Home;
