import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import MailProf from "components/MailProf";
import AgendaRendu from 'components/AgendaRendu';
import Actualites from 'components/Actualites';
import Cours from 'components/Cours';
import Login from 'components/Login';

import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="body-content">
        <Login />
        <div className="app">
          <Navbar />
          <div className="page-container">
            <Sidebar />
            <div className="page-content">
              <Switch>
                <Route exact path="/" component={Actualites} />
                <Route path="/agenda-rendu" component={AgendaRendu} />
                <Route path="/mail-prof" component={MailProf} />
                <Route path="/ressources" component={Cours} />
              </Switch>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
