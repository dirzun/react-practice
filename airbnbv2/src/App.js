import React from 'react';
import "reset-css";
import './index.scss';
import Box from "./components/Home/Box";
//import fileData from "./components/postData.json";
import Header from "./components/Header/Header";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Behost from "./components/Behost/Behost";
import Help from "./components/Help/Help";
import Signup from "./components/Header/Signup";
import Login from "./components/Header/Login";
import Home from "./components/Home/Box.js";



const App = () => {
  return (
    <div className="App">
      <Router>

      <Header>
      </Header>
      <Switch>
              <Route exact path="/" component={Box}></Route>
              <Route exact path="/behost" component={Behost} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
      </Switch>
      </Router>
    </div>
  );
};
export default App;
