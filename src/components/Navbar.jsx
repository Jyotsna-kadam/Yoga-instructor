import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  // Function to change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={navBackground ? "navbar bg-color-nav":"navbar"}>
      <h1 className="logo">Yoga Studio</h1>
      <ul className="nav-links">
        <li>
          <Link to="Intro" smooth={true} duration={500}>Intro</Link>
        </li>

        <li>
          <Link to="Experties" smooth={true} duration={500}>Experties</Link>
        </li>

        <li>
          <Link to="Awards" smooth={true} duration={500}>Awards</Link>
        </li>

        <li>
          <Link to="Classes" smooth={true} duration={500}>Classes</Link>
        </li>

        <li>
          <Link to="Privete Classes" smooth={true} duration={500}>Privete Classes</Link>
        </li>

        <li>
          <Link to="Reviews" smooth={true} duration={500}>Reviews</Link>
        </li>

        <li>
          <Link to="Contacts" smooth={true} duration={500}>Contacts</Link>
        </li>

      </ul>
    </nav>
  );
};


export default Navbar;
