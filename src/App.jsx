import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Experties from "./components/Experties";
import Awards from "./components/Awards";
import Classes from "./components/Classes";
import PrivateClass from "./components/PrivateClass";
import Review from "./components/Reviews";
import Contact from "./components/Contacts";



function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="intro" element={<Intro/>} />
        <Route path="/" element={<Experties/>} />
        <Route path="/" element={<Awards/>} />
        <Route path="/" element={<Classes/>} />
        <Route path="/" element={<PrivateClass/>} />
        <Route path="/" element={<Review/>} />
        <Route path="/" element={<Contact/>} />

      </Routes>
    </Router>
  )
}

export default App
