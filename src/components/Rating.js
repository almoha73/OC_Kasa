import React from "react";
import starGrey from '../assets/img/starGrey.svg';
import starPink from '../assets/img/starPink.svg'



const Rating = ({rating}) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) stars.push(<img src={starPink} alt="full-star" key={i} />)
        else stars.push(<img src={starGrey} alt="empty-star" key={i}/>)
      }
    return (
        <div className="rating">{stars}</div>
    );
};

export default Rating;
