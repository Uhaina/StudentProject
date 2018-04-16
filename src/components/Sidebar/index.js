import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class Sidebar extends React.Component {
  render = () => {
    return (
      <div className="sidebar-component">
        <div className="sidebar-navigation">
          <h2 className="sidebar-title">Accès rapide</h2>
          <NavLink className="link-sidebar"  activeStyle={ {
              textDecoration: 'none',
              color: 'rgba(181, 12, 21, .85)',
              fontWeight: 'bold'
            }} to="/backoffice/agenda-rendu"><img className="logo-item-sidebar" src="/images/icon-rendu.png"/>Agenda des rendus</NavLink>
           <NavLink className="link-sidebar"  activeStyle={ {
              textDecoration: 'none',
              color: 'rgba(181, 12, 21, .85)',
              fontWeight: 'bold'
            }} to="/backoffice/mail-prof"><img className="logo-item-sidebar" src="/images/icon-mail.png"/>Mail des profs</NavLink>
          <NavLink className="link-sidebar"  activeStyle={ {
              textDecoration: 'none',
              color: 'rgba(181, 12, 21, .85)',
              fontWeight: 'bold'
            }} to="/backoffice/ressources"><img className="logo-item-sidebar" src="/images/icon-cours.png"/>Cours</NavLink>
          <NavLink className="link-sidebar"  activeStyle={ {
              textDecoration: 'none',
              color: 'rgba(181, 12, 21, .85)',
              fontWeight: 'bold'
            }} to="/backoffice/toto"><img className="logo-item-sidebar" src="/images/icon-calendar.png"/>~Agenda semaine//</NavLink>
          <NavLink className="link-sidebar"  activeStyle={ {
              textDecoration: 'none',
              color: 'rgba(181, 12, 21, .85)',
              fontWeight: 'bold'
            }} to="/backoffice/tutu"><img className="logo-item-sidebar" src="/images/icon-notes.png"/>~Notes//</NavLink>
          </div>
        <div className="sidebar-footer">
          © IDRAC Mtp - Promo 2019
        </div>
      </div>
    );
  }
}

export default Sidebar;