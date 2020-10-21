import { faCalendar, faCog, faFileAlt, faShoppingCart, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import order from '../../../images/icons/order.png';
import service from '../../../images/icons/service.png';
import review from '../../../images/icons/review.png';
import addService from '../../../images/icons/addservice.png';
import admin from '../../../images/icons/admin.png';
import { UserContext } from '../../../App';




const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="sidebar" style={{overflow: 'hidden'}} >
    <ul className="list-unstyled">
    <li>
        <Link to={"/dashboard/order/" + 'order'} className="text-white">
            <div><img src={order} alt=""/><span>Order</span></div> 
        </Link>
    </li>
    <li>
        <Link to={"/dashboard/serviceList/" + 'serviceList'} className="text-white">
            <div><img src={service} alt=""/> <span>Service list</span></div>
        </Link>
    </li>
    {!loggedInUser.isAdmin && <li>
        <Link to={"/dashboard/reviews/" + 'reviews'} className="text-white">
            <div> <img src={review} alt=""/> <span>Review</span></div>
        </Link>
    </li>}
   { loggedInUser.isAdmin && <div><li>
        <Link to={"/dashboard/addService/" + 'addService'} className="text-white">
            <div><img src={addService} alt=""/><span>Add service</span></div>
        </Link>
    </li>
    <li>
        <Link to={"/dashboard/makeAdmin/" + 'makeAdmin'} className="text-white" >
           <div><img src={admin} alt=""/> <span>Make Admin</span></div>
        </Link>
    </li> </div>}
</ul>
    </div>
  );
};

export default Sidebar;