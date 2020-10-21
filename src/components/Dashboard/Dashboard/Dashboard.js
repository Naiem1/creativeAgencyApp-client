import React, { useContext } from 'react';
import './Dashboard.css';
import { Nav, Navbar, Image, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import { Link, useParams } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Orders from '../Orders/Orders';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';



const Dashboard = () => {
  const { par } = useParams();
  
  return (
    <div className="dashboard" style={{overflow: 'hidden'}}>
      <Topbar par={par}></Topbar>
      <div className="row">
        <div className="col-md-3">
          <div>
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="col-md-9" style={{background: "#F4F7FC"}}>
          <div className="mt-5 p-5 w-50">
            <Orders></Orders>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Dashboard;