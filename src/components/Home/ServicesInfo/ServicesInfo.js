import React, { useContext } from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesInfo.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { UserContext } from '../../../App';




const ServicesInfo = ({ serviceData }) => {

  const [loggedInUser, setLoggedInUser, selectedService, setSelectedService] = useContext(UserContext);
  const setProduct = () => {
      setSelectedService(serviceData)
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,

        }
      }
      
    ]
  }


  return (
    <div className="px-2 serviceInfo__container">
      <Link style={{textDecoration: 'none',}} onClick={setProduct} to={"/dashboard/order/"}>
          <div className="text-center bg-light p-4 rounded">
            <Image className="servicesInfo__img" src={`data:image/png;base64,${serviceData.image.img}`} fluid/>
            <h5 className="text-dark text-decoration-none">{serviceData.name}</h5>
            <p className="text-secondary text-decoration-none">{serviceData.details}</p>
            <p className="d-none">${serviceData.price}</p>
          </div>
        </Link>
      </div>
          
  );
};

export default ServicesInfo;