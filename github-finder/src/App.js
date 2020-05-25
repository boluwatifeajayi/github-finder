import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Notfound from "./components/pages/Notfound";
import User from "./components/users/User";

import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import AlertState from "./context/alert/AlertState";
import './App.css';



const App = () => {
  
  return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />

              <div className="container">
                <Alert/>
                <Switch>
                  <Route exact path="/" component={Home} />
                  
                  <Route exact path="./about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={Notfound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
                }
  

export default App;
