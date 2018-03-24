import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Sidebar extends React.Component {
  render = () => {
    return (
      <div className="sidebar-component">
        Sidebar Test
        <Link to="/agenda-rendu">Agenda des rendus</Link>
      </div>
    );
  }
}

export default Sidebar;