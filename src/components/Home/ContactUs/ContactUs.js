import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id="contact" className="contactUs">
      <Container>
        <Row>
          <Col className="contactUs__text">
            <h2>Lat Us handle your project, professionally</h2>
            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
          </Col>
          <Col>
          <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control className="border-0 py-4" type="email" placeholder="Your email address" />
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Control className="border-0 py-4" type="password" placeholder="Your name / Company's name" />
              </Form.Group>
              
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control className="border-0" as="textarea" style={{resize: 'none'}} rows={10} placeholder="Your message" />
            </Form.Group>
              
          <Button variant="dark" className="px-5 dark__button" type="submit">
            Send
          </Button>
        </Form>
          </Col>
        </Row>

        <small className="text-center d-block ">copyright Orange labs {new Date().getFullYear()}</small>
      </Container> 

    </div>
  );
};

export default ContactUs;