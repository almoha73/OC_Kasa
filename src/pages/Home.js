import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import ExploreContainer from "./logement/ExploreContainer";



const Home = ({data}) => {
  
  return (
    <>
    <main>
      <Navigation />
      <Banner text/>
      <ExploreContainer data={ data }/>
      <Footer />
    </main>
    
    </>
    
  );
};

export default Home;
