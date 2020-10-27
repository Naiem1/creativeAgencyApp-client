import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './PostReviews.css';





const PostReviews = () => {
  const {par} = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [input, setInput] = useState(null)
  const handleBlur = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  }

  console.log(input);

  const { displayName, photoURL } = loggedInUser;
  console.log('postReview img>>', loggedInUser.photoURL);
  const handleReviewSubmit = (e) => {
    if (displayName && input.designation && input.description) {
      const review = {...input, displayName, photoURL}
      fetch("https://enigmatic-waters-05452.herokuapp.com/review", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
      })
      document.getElementById('name').value = '';
      document.getElementById('designation').value = '';
      document.getElementById('textarea').value = '';
      
    }

    e.preventDefault();
  }

  return (
    <section className="post__reviews" style={{overflow: 'hidden'}}>
      <Topbar par={par}></Topbar>
      <Row>
        <Col md="3">
          <div>
          <Sidebar></Sidebar>
          </div>
        </Col>
        <Col md="9" className="p-5" style={{background: '#F4F7FC'}}>
            <div className="w-50 mt-5" style={{ padding: '10px', }}>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control onBlur={handleBlur} name="name" value={displayName} className="py-4 border-0 " id="name" type="text" placeholder="Your name" required={true} />
                </Form.Group>
              
                <Form.Group controlId="formBasicPassword">
                  <Form.Control onBlur={handleBlur}  name="designation" className="py-4 border-0" id="designation" type="text" placeholder="Company’s name, Designation" required={true}/>
                </Form.Group>
              
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control onBlur={handleBlur}  name="description" className="py-4 border-0 " id="textarea" as="textarea" rows={5} style={{resize: 'none'}} placeholder="Project Details" required={true} />
                </Form.Group>

                <Button onClick={handleReviewSubmit} variant="dark" className="dark__button px-5 py-2" type="submit">
                  Submit
              </Button>
                
              </Form>
        
          </div>
        </Col>
      </Row>

    </section>
  );
};

export default PostReviews;