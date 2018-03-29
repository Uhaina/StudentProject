import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import MailProf from "components/MailProf";
import AgendaRendu from 'components/AgendaRendu';
import Actualites from 'components/Actualites';
import Cours from 'components/Cours';
import './styles.scss';

class Backoffice extends React.Component {
  render = () => {
    return (
      <div className="backoffice">
        <div className="app">
          <Navbar />
          <div className="page-container">
            <Sidebar />
            <div className="page-content">
              <Switch>
                <Route exact path="/backoffice" component={Actualites} />
                <Route path="/backoffice/agenda-rendu" component={AgendaRendu} />
                <Route path="/backoffice/mail-prof" component={MailProf} />
                <Route path="/backoffice/ressources" component={Cours} />
              </Switch>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Backoffice;
