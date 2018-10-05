import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

function Navigation(props) {
  const { currentUser } = props;

  return (
    <Navbar className="nav"    right>
      {currentUser && (
        <span>
          <NavItem>
            <NavLink exact to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/room-list">Room list</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/my-flats">Flat list</NavLink>
          </NavItem>
          <b> Welcome, {currentUser.firstName}!</b>
          <NavItem>
            <NavLink to="/" onClick={() => props.onLogout()}>
              Log Out
            </NavLink>
          </NavItem>
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
