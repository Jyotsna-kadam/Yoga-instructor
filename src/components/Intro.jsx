import React, { useState } from "react";
import "./Intro.css";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

const Intro = () => {


  return (
    <div className="Intro-container">
      <div className="text-intro">
        <h2>Start Doing Yoga</h2>
        <p>Start A Healthy <br /> Way Of Life, <br /> Today!</p>
      </div>

      <div className="intro-para">
        <p>Yoga is not just an exercise; it’s a way of life. It connects your body, mind, and soul, bringing inner peace and balance.<br /> Whether you’re a beginner or an expert, practicing yoga daily can help you:</p>
      </div>

      <div className="Intro-btn">
        {/* <Button onClick={() => setOpen(true)} className="Begin-btn">BEGIN NOW</Button> */}
        <Link to="Contacts" smooth={true} duration={400}>BEGIN NOW</Link>
        {/* {open && (
          
        )} */}
      </div>
      
    </div>

  );
};

export default Intro;