import React, { useContext, useState } from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/googleicon.png';
import { Col, Row, Image, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);



const Login = () => {

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({});

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(data => {
        console.log(data.user);
        const userInfo = data.user;
        fetch('http://localhost:5000/isAdmin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.user.email })
        })
          .then(res => res.json())
          .then(data => {
            if (data.length == 1) {
              setUser({ ...userInfo, isAdmin: true });
              setLoggedInUser({ ...userInfo, isAdmin: true });
              
            }
            else {
              setUser({ ...userInfo, isAdmin: false })
              setLoggedInUser({ ...userInfo, isAdmin: false });
              
            }
          
          history.replace(from);
          });
      
      })
      .catch(err => {
        console.log(err);
    })
  }

  
  

  console.log('isAdmin',loggedInUser.isAdmin);

  return (
    <div className="login">
      <Container className="d-flex justify-content-center logo-container">
      <Link to='/'><img src={logo} className="img-fluid logo" alt=""/></Link>
      </Container>
      <Row className="d-flex align-items-center h-100">
        <Col className="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4">
          <div className="login__box">
            <h4>Login with</h4>
            <div onClick={handleGoogleSignIn} className="login__button">
              <Image className="login__icon" src={google} fluid />
              <a className="m-auto text-decoration-none">Continue with google</a>
            </div>
          </div>
        </Col>
      </Row>
      
    </div>
  );
};

export default Login;