import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import fileUpload from '../../../images/icons/file-upload.png';
import './Orders.css';

const Orders = ({ findData }) => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser, selectedService, setSelectedService] = useContext(UserContext);
  const [input, setInput] = useState({
    title: '',
    details: '',
    price: '' 
  })

  const handleBlur = e => {
    if (e.target.name == 'title') {
      const title = e.target.value;
      const newInput = { ...input};
      newInput.title = title;
      setInput(newInput);
    }

    if (e.target.name == 'description') {
      const description = e.target.value;
      const newInput = { ...input };
      newInput.details = description;
      setInput(newInput);
    }

    if (e.target.name == 'price') {
      const price = e.target.value;
      const newInput = { ...input };
      newInput.price = price;
      setInput(newInput);
    }
    
  }

  const { displayName, email} = loggedInUser;

  const handleSubmit = (e) => {
    if (input.title || selectedService.name && input.price || selectedService.price && loggedInUser.email) {
      history.push('/dashboard/order')
      const data = { ...input, displayName, email, ...selectedService };
        fetch("https://enigmatic-waters-05452.herokuapp.com/addOrder", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('price').value = '';
      
      
    }
    e.preventDefault();
  }


  return (
    <div className="orders" style={{ padding: '10px', }}>

      
              <Form>
              <Form.Group >
                <Form.Control className="py-4 border-0 " id='username' type="text" name="username" value={loggedInUser.displayName} placeholder="Your name / company’s name" required={true} />
              </Form.Group>
            
              <Form.Group >
                <Form.Control className="py-4 border-0  " id="email" type="email" name="email" value={loggedInUser.email} placeholder="Your email address" />
              </Form.Group>
      
              <Form.Group>
                <Form.Control onBlur={handleBlur} className="py-4 border-0 " id="title" type="text" name="title" value={selectedService.name} placeholder="Enter Products" />
              </Form.Group>
            
              <Form.Group >
                <Form.Control onBlur={handleBlur} className="py-4 border-0 " id="description" as="textarea" name="description" value={selectedService.details} rows={5} style={{resize: 'none'}} placeholder="Project Details" />
              </Form.Group>

        <Row>
          <Col>
          
          <Form.Group >
            <Form.Control onBlur={handleBlur} className="py-4 border-0" type="text" id='price' name="price" value={selectedService.price} placeholder="Price"/>
            </Form.Group>
          </Col>
          
          <Col  className="align-self-center">
          <div class="form-group">
              <div className="uploadBtn">
                <img className="file__icon img-fluid" src={fileUpload} alt="" />
                <p className="upload__text">Upload Image</p>
                <input type="file" name="file" class="form-control-file" />
              </div>
        </div>
          </Col>
        </Row>
      
              <Button onClick={handleSubmit} variant="dark" className="dark__button px-5 py-2" type="submit">
                Send
            </Button>
              
      </Form>
      


          
    </div>
  );
};

export default Orders;