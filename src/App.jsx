import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import Intro from "./components/Intro";
import Experties from "./components/Experties";
// import Awards from "./components/Awards";
import Classes from "./components/Classes";
import PrivateClass from "./components/PrivateClass";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {


  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration (in ms)
      once: true,       // Whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  

  return (
    <div>
      <Navbar />

      <Element name="Intro">
        <Intro></Intro>
      </Element>

      <Element name="Experties">
        <Experties> </Experties>

      </Element>


      {/* <Element name="Awards">
        <Awards></Awards>
      </Element> */}

      <Element name="Classes">
        <Classes></Classes>
      </Element>

      <Element name="PrivateClass">
        <PrivateClass></PrivateClass>
      </Element>

      <Element name="Reviews">
        <Reviews></Reviews>
      </Element>

      <Element name="Contacts">
        <Contacts></Contacts>
      </Element>

    </div>
  

  )
}

export default App
