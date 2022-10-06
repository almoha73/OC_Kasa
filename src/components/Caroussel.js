import React, { useState } from "react";
import BtnSlider from "./BtnSlider";

const Caroussel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  };

  const sliderCount = `${current + 1}  / ${length}`

  return (
   
      <div className="slider">
        <BtnSlider direction="next" moveSlide={nextSlide} />
        <BtnSlider direction="prev" moveSlide={prevSlide} />
        <p className="slider-count">{sliderCount}</p>
        {slides.map((obj, index) => {
          return (
            <div
              className={index === current ? "slide slide-active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={obj} alt="" className="imageSlide" />
              )}
            </div>
          );
        })}
      </div>
    
  );
};

export default Caroussel;
