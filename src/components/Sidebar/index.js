import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Sidebar extends React.Component {
  render = () => {
    return (
      <div className="sidebar-component">
        <div className="sidebar-navigation">
          <h2 className="sidebar-title">Accès rapide</h2>
          <Link className="link-sidebar" to="/agenda-rendu"><img className="logo-item-sidebar" src="images/icon-rendu.png"/>Agenda des rendus</Link>
          <Link className="link-sidebar" to="/mail-prof"><img className="logo-item-sidebar" src="images/icon-mail.png"/>Mail des profs</Link>
          <Link className="link-sidebar" to="/ressources"><img className="logo-item-sidebar" src="images/icon-cours.png"/>~Cours</Link>
          <Link className="link-sidebar" to="/"><img className="logo-item-sidebar" src="images/icon-calendar.png"/>~Agenda semaine </Link>
          <Link className="link-sidebar" to="/"><img className="logo-item-sidebar" src="images/icon-notes.png"/>~Notes (Login temp)</Link>
          </div>
        <div className="sidebar-footer">
          © IDRAC Mtp - Promo 2019
        </div>
      </div>
    );
  }
}

export default Sidebar;