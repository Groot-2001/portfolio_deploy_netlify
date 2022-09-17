import React from "react";
import Intro from "./Components/Introduction/Intro";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

export default function Card() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}