import React from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function Home(props) {
  const { currentUser } = props;
  return (
    <section className="home">
      <h2 id="home-title">Find Your Ideal Roommates Now </h2>
      {!currentUser && (
        <div className="button-div" >
        <Link className="btn" to='/signup'>Sign Up</Link>
        <Link className="btn" to='/Login'>Login</Link>
        </div>
        )}
        <p id="home-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam possimus rerum molestias,
          eum quod natus ut minus molestiae quisquam facilis odio, soluta expedita officia at! Non,
          suscipit saepe. Enim, tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequatur et sequi exercitationem. Eos cupiditate provident modi repudiandae ad mollitia,
          beatae tenetur aliquid. Nesciunt similique obcaecati impedit est deleniti totam culpa?</p>
    </section>
  );
}

export default Home;
