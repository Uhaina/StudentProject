import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Navbar extends React.Component {
  render = () => {
    return (
      <div className="navbar-component">
        <Link to='/'>
          <img className="logo-idrac" src="images/logo-idrac.png" />
        </Link>
        <h1 className="navbar-title">- Espace IDRAC</h1>
      </div>
    );
  }
}

export default Navbar;