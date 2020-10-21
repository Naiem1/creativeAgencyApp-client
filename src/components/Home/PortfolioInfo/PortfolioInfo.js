import React from 'react';
import { Carousel, Col, Image, Row } from 'react-bootstrap';
import './PortfolioInfo.css'

const PortfolioInfo = ({ portfolioData }) => {
  console.log(portfolioData);
  return (
        
      <div className="px-2">
         <div className="portfolio__info mt-3 mt-md-0">
        <Image src={portfolioData.image} className="portfolio__img" fluid />
         </div>
       </div>
    
);
};

export default PortfolioInfo;