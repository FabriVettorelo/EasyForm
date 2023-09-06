import React, { useState } from "react";
import style from "./About.module.css";
import image from "../../assets/Captura.jpg"

const About = () => {

  return (
    <div className={style.container}>
      <img src={image} alt="" style={{height:"80vh"}}/>
    </div>
  );
};

export default About;