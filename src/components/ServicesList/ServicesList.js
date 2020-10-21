import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row, Image, Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ServiceListForAdmin from '../Dashboard/ServiceListForAdmin/ServiceListForAdmin';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Topbar from '../Dashboard/Topbar/Topbar';
import './servicesList.css';


const ServicesList = () => {

  const { par } = useParams();
  
  const [dataInfo, setDataInfo] = useState([]);
  const [loggedInUser, setLoggedInUser, selectedService, setSelectedService] = useContext(UserContext);
  console.log(loggedInUser.email);
  console.log("serviceList__contextApi", selectedService);

  const {email} = loggedInUser;
  useEffect(() => {
    fetch("http://localhost:5000/allOrders?email=" + email)
      .then(res => res.json())
      .then(data => {
        setDataInfo(data);
    })
  }, [dataInfo])


  dataInfo.map(data => console.log('serviceList and DataImg', data));

  return (
    <div style={{overflow: 'hidden'}}>
      <Topbar par={par}></Topbar>

      <Row>
        <Col md="3">
          <div className="">
              <Sidebar></Sidebar>
          </div>
        </Col>
        <Col md="9" className="" style={{ background: '#F4F7FC' }}>
          
            {loggedInUser.isAdmin ? <div className="p-3 mt-4 mr-4 bg-white border table__container" style={{borderRadius: '10px'}}>
            <table class="table bg-white">
              <thead class="thead-light">
                  <tr className="border-0">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Service</th>
                  <th scope="col">Project Details</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              
                  <ServiceListForAdmin></ServiceListForAdmin>
                
              </tbody>
            </table>
          </div>
          
            :

           <Row className="d-flex px-4 py-3">
          
              {
              dataInfo.map(data => {
                console.log('dataImg', data)
                  
                  return (
                                          
                    <Col md="4" className="py-2">
                      <div className="bg-white p-4 rounded border">
                        <Row className="">
                          <Col>
                          <Image src={`data:image/png;base64,${data.image.img}`} fluid style={{ width: '60px' }} />
                          </Col>
                          <Col className="text-center">
                          <button className="btn btn-primary">Done</button>
                          </Col>
                        </Row>

                        <h5>{data.name || data.title }</h5>
                        <p>{data.details}</p>
                        <small>${data.price}</small>
                      </div>
                    </Col>
                     
                  )
                })
              }
          </Row>}
            
        </Col>
      </Row>
    </div>
  );
};

export default ServicesList;


