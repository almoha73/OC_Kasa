import React from "react";
import about from "../assets/img/about.jpg"
import home from "../assets/img/home.jpg"
const Banner = ({noText, text}) => {
  return (
    <div className="dark-title">
      <div className="dark"></div>
      <div className="title">
        {
          noText && (
            <img src={about} alt="" />
          )
        }
        {
          text && (
            <>
            <img src={home} alt="" />
            <h1>Chez vous, partout et ailleurs</h1>
            </>
            
          )
        }
        
      </div>
    </div>
  );
};

export default Banner;
