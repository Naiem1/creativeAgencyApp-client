import React from 'react';
import { Col, Row, Image, Carousel } from 'react-bootstrap';
import './ClientsFeedbackCard.css';

const ClientsFeedbackCard = ({ clientFeedbackData }) => {
  const { displayName, designation, description, photoURL } = clientFeedbackData;
  console.log('googlePhoto', photoURL);
  return (
      <div className="px-2">
        <div className="clients__feedbackCard mt-3 mt-md-0">
          <div className="card__top d-flex align-items-center">
            <div className="card__imgArea">
              <Image src={photoURL} className="card__img" fluid/>
            </div>
            <div className="card__nameArea ml-2">
              <h5>{displayName}</h5>
              <p>{designation}</p>
            </div>
          </div>
          <div className="card__comments mt-1 text-secondary">
            <p>{description}</p>
          </div>
        </div>
      </div>

   
  );
};

export default ClientsFeedbackCard;