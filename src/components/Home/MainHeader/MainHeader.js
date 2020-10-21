import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import './MainHeader.css';
import Frame from '../../../images/logos/Frame.png';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <div id="home" className="main__header">
      <Container>
        <Row>
          <Col sm="6" lg="5" className="align-self-center left">
            <h1>Let’s Grow Your Brand To The Next Level</h1>
            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
            <Link to="/dashboard/order"><Button variant="dark" className="px-5 dark__button">Hire Us</Button></Link>
          </Col>
          <Col sm="6" lg="7" className="right">
            <Image
              src={Frame}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHeader;