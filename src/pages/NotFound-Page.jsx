import React from 'react';
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
      <div>
        <div className="container">
          <Header/>
          <div className="not-found-container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to="/">retourner sur la page d'accueil</Link>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default NotFoundPage;
