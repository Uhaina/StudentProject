import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Navbar extends React.Component {
  render = () => {
    return (
      <div className="navbar-component">
        <Link to='/backoffice'>
          <img className="logo-idrac" src="/images/logo-idrac.png" />
        </Link>
        <div className="main-title-container">
          <div className="picture">
            <img className="picture-logo" src="/images/wave.svg"/>
          </div>
          <div className="text-title">
          <h1 className="website-title">Uhaina.fr</h1>
          <p className="logo-subtitle">IDRAC Student Group</p>
          </div>
        </div>
        <a href="https://www.facebook.com/groups/374832636282275/?ref=bookmarks" target="_blank"><img className="navnar-RS" src="/images/icons8-facebook.png"/></a>
      </div>
    );
  }
}

export default Navbar;