import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import MainHeader from '../MainHeader/MainHeader';
import Clients from '../Clients/Clients';



const header = () => {
  return (
    <div className="header">
      <Navigation></Navigation>
      <MainHeader></MainHeader>
    </div>
  );
};

export default header;