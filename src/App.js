import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import MailProf from "components/MailProf";
import AgendaRendu from 'components/AgendaRendu';

import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="page-container">
          <Sidebar />
          <div className="page-content">
            <Switch>
              <Route path="/" exact component={MailProf} />
              <Route path="/agenda-rendu" component={AgendaRendu} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
