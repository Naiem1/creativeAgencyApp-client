import React, { useEffect, useState } from 'react';
import './ClientsFeedback.css'
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import { Container, Row } from 'react-bootstrap';
import ClientsFeedbackCard from '../ClientsFeedbackCard/ClientsFeedbackCard';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ServicesInfo from '../ServicesInfo/ServicesInfo';



// sliders
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

const ClientsFeedback = () => {


  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
  fetch('https://enigmatic-waters-05452.herokuapp.com/feedback')
    .then(res => res.json())
  .then(data => setFeedback(data))
}, [])
  
  console.log(feedback)
  return (
    <div className="clientsFeedback" style={{padding: '10px'}}>
      <h2 style={{marginTop: '100px'}} className="text-center">Clients <span className="text-success">Feedback</span></h2>
      <Container style={{marginTop: '110px', marginBottom: '150px'}}>
       <Slider {...settings}>
          {
            feedback.map(clientFeedbackData => <ClientsFeedbackCard
            
                                clientFeedbackData={clientFeedbackData}
                                >
                                </ClientsFeedbackCard>)
          }
        </Slider>
      </Container>
      
    </div>
  );
};

export default ClientsFeedback;