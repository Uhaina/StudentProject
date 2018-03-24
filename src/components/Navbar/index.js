import React from 'react';

import './styles.scss';

class Navbar extends React.Component {
  render = () => {
    return (
      <div className="navbar-component">
        <img className="logo-idrac" src="images/logo-idrac.png" />
      </div>
    );
  }
}

export default Navbar;