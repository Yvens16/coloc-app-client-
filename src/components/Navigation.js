import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from 'react-materialize';

function Navigation(props) {
  const { currentUser } = props;

  return (
    <Navbar brand="logo" right>
      {!currentUser && (
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </span>
      )}

      {currentUser && (
        <span>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/room-list">Room List</NavLink>
          <NavLink to="/my-flats">Flat List</NavLink>
        </span>
      )}
    </Navbar>
  );
}

export default Navigation;

// <Navbar brand='logo' right>
//   <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
//   <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
//   <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
//   <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
// </Navbar>