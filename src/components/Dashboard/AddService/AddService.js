import React, { useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './AddService.css'
import fileUpload from '../../../images/icons/file-upload.png';








const AddService = () => {

  const {par} = useParams();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleSubmit = (e) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('details', info.details);
    formData.append('price', info.price);

    fetch('https://enigmatic-waters-05452.herokuapp.com/addService', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
      
    e.preventDefault()
  }

  console.log(file)

  return (
    <section className="addServices"  style={{overflow: 'hidden'}}>
      <Topbar par={par}></Topbar>
      
      <Row className="">
        <Col md="3">
          <Sidebar></Sidebar>
        </Col>
     
        <Col md="9" className="pt-5 pr-5" style={{background: '#F4F7FC', overflow: 'hidden'}}>
          <div className="p-3  bg-white">
          <Form onSubmit={handleSubmit} className="bg-white py-5 pl-4 w-50">
              <Row>
                <Col md="9">
                <Form.Group >
                  <Form.Label>Service title</Form.Label>
                  <Form.Control onBlur={handleBlur} type="text" name="name"  placeholder="Enter title" />
                </Form.Group>
                </Col>   
                <Col md="3" className="">
                  <div class="form-group mt-4">
                  <div className="uploadBtn">
                    <img className="file__icon img-fluid" src={fileUpload} alt=""/>
                  <input type="file" onBlur={handleFileUpload} name="file" class="form-control-file" />
                  </div>
                </div>
                </Col>   
              </Row>
              <Form.Group >
                <Form.Label>Description</Form.Label>
                <Form.Control onBlur={handleBlur} as="textarea" rows={10}  name="details" placeholder="Enter Description" />
              </Form.Group>
              <div className="clearfix">
              <Form.Label className="float-left mr-4">Price:</Form.Label>
              <Form.Group >
                <Form.Control onBlur={handleBlur} className="float-left w-50" type="text"   name="price" placeholder="Enter Price" />
              </Form.Group>
              
              <Button className="float-right" variant="primary" type="submit">
                Submit
              </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    
    </section>
  );
};

export default AddService;
// <Col  className="align-self-center">
//           <div class="form-group">
//               <div className="uploadBtn">
//                 <img className="file__icon img-fluid" src={fileUpload} alt="" />
//                 <p className="upload__text">Upload Image</p>
//                 <input type="file" name="file" class="form-control-file" />
//               </div>
//         </div>
//           </Col>