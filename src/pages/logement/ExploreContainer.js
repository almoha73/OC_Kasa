import React from "react";
import Card from "../../components/Card"

const ExploreContainer = ({ data }) => {
  return (
    <div className="gallery">
      <Card data={data} />
    </div>
  );
};

export default ExploreContainer;
