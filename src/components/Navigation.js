import React from "react";
import { NavLink } from "react-router-dom";

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
        </span>
      )}
    </nav>
  );
}

export default Navigation;
