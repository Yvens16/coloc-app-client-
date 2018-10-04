import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-materialize";

function Navigation(props) {
  const { currentUser } = props;

  return (
    <Navbar brand="Logo" right>
      {!currentUser && (
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
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
