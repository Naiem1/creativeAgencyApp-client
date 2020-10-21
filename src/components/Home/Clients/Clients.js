import React from 'react';
import './Clients.css'
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import { Container, Row } from 'react-bootstrap';
import ClientsName from '../ClientsName/ClientsName';

const clientName = [slack, google,uber, netflix, airbnb]

const Clients = () => {
  return (
    <div className="clients">
      <Container className="">
        <Row className="">
          {
            clientName.map(clientName => <ClientsName
                            clientName={clientName}
                          >
                          </ClientsName>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default Clients;