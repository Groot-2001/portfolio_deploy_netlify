import React from 'react';
import './intro.css';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Intro() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  });

  useEffect(()=>{
    const mouseMove = (e) =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove",mouseMove);

    return ()=>{
      window.removeEventListener("mousemove",mouseMove);
    }
  },[]);

  const variants ={
    default:{
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text:{
      height:100,
      width:100,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor:"yellow",
      mixBlendMode:"difference",
    },
  };

  const textEnter =() => setCursorVariant("text");
  const textLeave =() => setCursorVariant("default");

  return (
    <div className='welcome-section'>
            <h1 onMouseEnter={textEnter}
       onMouseLeave={textLeave} >Hey I am Shiva</h1>
            <p>Enthusiastic Programmer</p>
        <motion.div 
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        ></motion.div>
    </div>
  );
}

export default Intro;
