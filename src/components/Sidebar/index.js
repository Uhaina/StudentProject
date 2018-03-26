import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Sidebar extends React.Component {
  render = () => {
    return (
      <div className="sidebar-component">
        <h2 className="sidebar-title">Accès rapide</h2>
        <Link to="/agenda-rendu">Agenda des rendus</Link>
        <br/>
        <Link to="/mail-prof">Mail des profs</Link>
      </div>
    );
  }
}

export default Sidebar;