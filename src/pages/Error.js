import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Error = () => {
  return (
    <main>
      <Navigation />
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
};

export default Error;
