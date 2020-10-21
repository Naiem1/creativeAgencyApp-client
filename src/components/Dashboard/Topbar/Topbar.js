import React, { useContext } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import './Topbar.css';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Topbar = ({par}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="topbar">
      <div>
          <Navbar  variant="light">
          <Navbar.Brand className="pl-5">
              <Link to="/"><Image src={logo} style={{height: '40px'}} fluid/></Link>
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link className="text-capitalize" style={{ marginLeft: '200px', fontWeight: 'bold', color: '#000', fontSize: '25px', letterSpacing: '1px' }} >{par}</Nav.Link>
          </Nav>
          <Nav className="ml-auto mr-5">
            <Nav.Link>{loggedInUser.displayName}</Nav.Link>
          </Nav>
          </Navbar>
      </div>
    </div>
  );
};

export default Topbar;