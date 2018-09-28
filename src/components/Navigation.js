import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink  to="/signup">Sign Up</NavLink>
    </nav>
  )
}

export default Navigation;