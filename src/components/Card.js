import React, { useEffect, useState } from "react";
import OneCard from "./OneCard";
import { Link } from "react-router-dom";


const Card = ({ data }) => {
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="card">
        {data.map((elt) => (
          <Link
            to={{
              pathname: `/logement/${elt.title.replace(/\s+/g, "").trim()}`,
            }}
            key={elt.id}
          >
            <OneCard data={elt} />
          </Link>
        ))}
      </ul>
    );
  }
};

export default Card;
