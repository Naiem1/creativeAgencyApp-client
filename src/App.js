import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServicesList from './components/ServicesList/ServicesList';
import PostReviews from './components/Dashboard/PostReviews/PostReviews';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Orders from './components/Dashboard/Orders/Orders';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedService, setSelectedService] = useState({});



  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, selectedService, setSelectedService]}>
      <Router>
        
     
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard/order/">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/order/:par">
            <Orders></Orders>
          </PrivateRoute>
         
          <PrivateRoute path="/dashboard/serviceList/:par">
            <ServicesList></ServicesList>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/reviews/:par">
            <PostReviews></PostReviews>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/addService/:par">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/makeAdmin/:par">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
