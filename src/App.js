import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'components/Login';

import "./styles.scss";
import Backoffice from "./components/Backoffice";

class App extends Component {
  render() {
    return (
      <div className="login-app">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/backoffice" component={Backoffice} />
        </Switch>
      </div>
    );
  }
}

export default App;
