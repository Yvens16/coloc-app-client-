import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation(props) {
  const { currentUser } = props;

  return (
    <nav>
      {!currentUser && (
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
          <br />
          <NavLink to="/login">Log In</NavLink>
        </span>
      )}

      {currentUser && (
        <span>
          <NavLink exact to="/">
            Home
          </NavLink>
          <br />
          <NavLink to="/room-list">Room list</NavLink>
          <br />
          <NavLink to="/my-flats">Flat list</NavLink>
          <br />
          <b> Welcome, {currentUser.firstName}!</b>
          <br />
          <Link to="/">
            <button onClick={() => props.onLogout()}>Log Out</button>
          </Link>
        </span>
      )}
    </nav>
  );
}

export default Navigation;
