import React from 'react';
import Header from "../components/Header";
import AccommodationsData from '../utils/datas/accommodationsData.json'
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Infos from "../components/Infos";
import Dropdown from "../components/Dropdown";
import NotFoundPage from "./NotFound-Page";

const AccommodationPage = () => {
  const {id} = useParams()

  // Trouver le logement correspondant à l'Id dans les données'
  const selectedAccommodation = AccommodationsData.find(
      (accommodation) => accommodation.id === id
  )

  if (!selectedAccommodation) {
    // Gérer le cas où le logement n'est pas trouvé
    return (
        <NotFoundPage/>
    );
  }

  return (
      <div>
        <div className="container">
          <Header/>

          <Slideshow pictures={selectedAccommodation.pictures}/>

          <Infos
              title={selectedAccommodation.title}
              location={selectedAccommodation.location}
              tags={selectedAccommodation.tags}
              host={selectedAccommodation.host}
              rating={selectedAccommodation.rating}
          />

          <Dropdown
              description={selectedAccommodation.description}
              equipments={(selectedAccommodation.equipments).map((equipment, index) => (
                  <li key={index}>{equipment}</li>
              ))}
              currentPage="accommodation"
          />
        </div>
        <Footer/>

      </div>
  );
};

export default AccommodationPage;

