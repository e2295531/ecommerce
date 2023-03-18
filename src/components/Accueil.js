import React from "react";
import { Link } from "react-router-dom";
import epices from "../assets/epices.jpg"


function Accueil() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Bienvenue sur notre site e-commerce !</h1>
        <img src={epices} alt="Notre entreprise" height="400px" />
        <p>
          Nous vendons une large gamme de produits de qualité à des prix
          compétitifs.
        </p>
        <Link to="/produits" className="btn btn-info mr-2">
          Voir nos produits
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
