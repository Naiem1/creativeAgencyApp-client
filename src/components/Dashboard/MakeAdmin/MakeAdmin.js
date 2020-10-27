import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './MakeAdmin.css';


const MakeAdmin = () => {

  const { par } = useParams();
  const [input, setInput] = useState({
    email: ''
  })

 
    


  const handleBlur = (e) => {
    const newInput = { ...input };
     newInput[e.target.name] = e.target.value;
    setInput(newInput);
  }
  console.log(input)


  const handleSubmit = (e) => {
    if (input.email) {
      
      fetch('https://enigmatic-waters-05452.herokuapp.com/addAdminEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: input.email})
      })
    }

    e.preventDefault()
  }

  return (
    <section className="Make__admin" style={{overflow: 'hidden'}}>
      <Topbar par={par}></Topbar>
      <Row>
        <Col md="3">
          <Sidebar></Sidebar>
        </Col>
        <Col md="9" className="p-5" style={{background: '#F4F7FC' }}>
            <div className="bg-white rounded" style={{padding: '15px 0 100px 20px'}}>
              <Form className="w-50">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter email" />
              </Form.Group>
            
              <Button onClick={handleSubmit} variant="primary" className="" type="submit">
                Submit
              </Button>
            </Form> 
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default MakeAdmin;