import React from "react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = ({ dataAbout }) => {
  console.log(dataAbout);
  return (
    <div className="page-about">
    <Navigation />
    <Banner noText/>
    <main className="main-about">
      <div className="accordion-about">
        {dataAbout.map((elt, index) => (
          <Accordion
            key={index}
            titre={elt.titre}
            content={elt.content}
            large
          />
        ))}
      </div>

      
    </main>
    <Footer />
    </div>
    
  );
};

export default About;
