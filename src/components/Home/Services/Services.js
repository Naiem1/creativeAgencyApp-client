import React, { useEffect } from 'react';
import './Services.css'
import { Col, Container, Row, Image } from 'react-bootstrap';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';


// slick
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
      breakpoint: 800,
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


const Services = () => {


  const [serviceInfo, setServiceInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServiceInfo(data))
    .catch(err => console.log(err))
  }, [serviceInfo])


  
  return (
    <div className="services">
      
      
      <h2 className="text-center">Provide awesome <span className="text-success">services</span></h2>

      <Container className="" style={{marginTop: '200px'}}>
      
        <Slider {...settings}>
            
          {
            serviceInfo.map(service => <ServicesInfo
              serviceData={service}>
            </ServicesInfo>)
          }
        
        </Slider>
      </Container>

    </div>
  );
};

export default Services;
