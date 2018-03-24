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
      </div>
    );
  }
}

export default Navbar;