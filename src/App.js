import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'components/Login';

import "./styles.scss";
import Backoffice from "./components/backoffice";

class App extends Component {
  render() {
    return (
      <div className="login-app">
        <Login />
        <Switch>
          <Route exact path="/Login" />
          <Route path="/backoffice" component={Backoffice} />
        </Switch>
      </div>
    );
  }
}

export default App;
