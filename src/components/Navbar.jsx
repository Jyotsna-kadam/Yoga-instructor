import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Yoga Studio</h1>
      <ul className="nav-links">
        <li><Link to="/">Intro</Link></li>
        <li><Link to="/">Experties</Link></li>
        <li><Link to="/">Awards</Link></li>
        <li><Link to="/">Classes</Link></li>
        <li><Link to="/">Private Classes</Link></li>
        <li><Link to="/">Reviews</Link></li>
        <li><Link to="/">Contacts</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;
