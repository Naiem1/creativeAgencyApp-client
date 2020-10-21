import React, { useState } from 'react';
import './Home.css'
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactUs from '../ContactUs/ContactUs';




const Home = () => {

  return (
    <div className="home">
      <Header></Header>
      <Clients></Clients>
      <Services></Services>
      <Portfolio></Portfolio>
      <ClientsFeedback></ClientsFeedback>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;