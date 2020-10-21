import React, { useContext, useEffect, useState } from 'react';
import './ServiceListForAdmin.css'

const ServiceListForAdmin = () => {

  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/addOrdersForAdmin')
      .then(res => res.json())
      .then(data => setAllOrders(data))
    .catch(err => console.log(err))
  }, [])

 
  return (

   <>
    
    {
        allOrders.map(orders => {
          if (orders.email) {
            return (
              <tr>
                <td scope="row" className=""></td>
                <td className="border-top-0">{orders.displayName}</td>
                <td>{orders.email}</td>
                <td>{orders.name}</td>
                <td className="w-25 pr-3">{orders.details}</td>
                <td>status</td>
              </tr>
            )
          }
        })
    }
    
    </>

    
  );
};

export default ServiceListForAdmin;