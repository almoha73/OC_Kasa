import React from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Caroussel from "../../components/Caroussel";
import Navigation from "../../components/Navigation";
import Rating from "../../components/Rating";
import Tags from "../../components/Tags";
import Footer from "../../components/Footer";

const ExploreDetails = ({ data }) => {
  const { title } = useParams();

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navigation />
        {data
          .filter((task) => task.title.replace(/\s+/g, "").trim() === title)
          .map((task) => (
            <>
              <div className="slides-container" >
                <Caroussel slides={task.pictures} />
              </div>

              <div className="logement-title">
                <div className="title-location">
                  <h1>{task.title}</h1>
                  <h2>{task.location}</h2>
                  <Tags tag={task.tags} />
                </div>
                <div className="host-rate">
                  <div className="host">
                    <p className="host-name">{task.host.name}</p>
                    <img
                      className="host-picture"
                      src={task.host.picture}
                      alt=""
                    />
                  </div>
                  <Rating rating={task.rating} />
                </div>
              </div>
              <div className="accordion-bloc" >
                <Accordion  titre="Description" content={task.description} numb={task.id}/>
                <Accordion  titre="Equipements" content={task.equipments} numb={task.id}/>
              </div>
            </>
          ))}
        <Footer />
      </>
    );
  }
};

export default ExploreDetails;
