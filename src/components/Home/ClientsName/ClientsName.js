import React from 'react';
import { Col,Image } from 'react-bootstrap';
import './ClientsName.css';

const ClientsName = ({clientName}) => {
  console.log(clientName);
  return (
    <Col sm className="">
      <div>
        <Image src={clientName} className="client__logo" fluid/>
      </div>
    </Col>
  );
};

export default ClientsName;