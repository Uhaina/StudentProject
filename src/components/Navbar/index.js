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
        <div className="main-title-container">
          <div className="picture">
            <img className="picture-logo" src="images/wave.svg"/>
          </div>
          <div className="text-title">
          <h1 className="website-title">Uhaina.fr</h1>
          <p className="logo-subtitle">IDRAC Student Group</p>
          </div>
        </div>
        <p className="navbar-title">React IDRAC - Promo 2019</p>
      </div>
    );
  }
}

export default Navbar;