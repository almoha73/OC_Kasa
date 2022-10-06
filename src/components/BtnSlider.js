import React from "react";
import leftArrow from "../assets/img/leftArrow.svg";
import rightArrow from "../assets/img/rightArrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
    key={direction}
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="icone flèche"
        
      />
    </button>
  );
};

export default BtnSlider;
