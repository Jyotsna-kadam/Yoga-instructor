import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { LuSquareMenu } from "react-icons/lu";
import "./Navbar.css";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const[open, setOpen] = useState(false);

  const buttonClick = () => {
    setOpen(!open);
  };

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
      <h1 className="logo">YOGA STUDIO</h1>
      <ul className={open ? "nav-link.active" : "nav-links"}>

      {/* <ul className="nav-links"> */}
        <li>
          <Link to="Intro" smooth={true} duration={500}>Intro</Link>
        </li>

        <li>
          <Link to="Experties" smooth={true} duration={500}>Experties</Link>
        </li>

        {/* <li>
          <Link to="Awards" smooth={true} duration={500}>Awards</Link>
        </li> */}

        <li>
          <Link to="Classes" smooth={true} duration={500}>Classes</Link>
        </li>

        <li>
          <Link to="PrivateClass" smooth={true} duration={500}>Private Classes</Link>
        </li>

        <li>
          <Link to="Reviews" smooth={true} duration={500}>Reviews</Link>
        </li>

        <li>
          <Link to="Contacts" smooth={true} duration={500}>Contacts</Link>
        </li>

      </ul>

      <div className="icon" onClick={buttonClick}>
      <LuSquareMenu />
      </div>

    </nav>
  );
};


export default Navbar;
