import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { Carousel, Container, Row } from 'react-bootstrap';
import PortfolioInfo from '../PortfolioInfo/PortfolioInfo';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"




const Portfolio = () => {

  // Slider
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

  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    fetch('https://enigmatic-waters-05452.herokuapp.com/portfolio')
      .then(res => res.json())
    .then(data => setPortfolio(data))
  }, [])


  return (
    <div id="portfolio" className="portfolio d-flex align-items-center flex-column justify-content-center ">
      <h2 className="mb-5 text-white">Here are some of <span className="text-success">our works</span></h2>
      <Container>
        
        <Slider {...settings}>
          {
            portfolio.map(portfolioData => <PortfolioInfo
                     portfolioData={portfolioData}
                    >
                    </PortfolioInfo>)
          }
            </Slider>
            
      </Container>
    </div>
  );
};

export default Portfolio;