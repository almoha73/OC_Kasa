import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";

import Api from "./Api/Api";
import ExploreDetails from "./pages/logement/ExploreDetails";



const App = () => {
  const datas = Api("../logements.json");
  const datasAbout = Api("../about.json");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  data={ datas } />} />
        <Route path="/about" element={<About dataAbout={ datasAbout }/>} />
        <Route path="/logement/:title" element={<ExploreDetails data={ datas }/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
