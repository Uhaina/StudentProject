import React from 'react';

import './styles.scss';

class Index extends React.Component {
  render = () => {
    return (
      <div className="body-login-content">
      <div className="login-content">
        <img className="logo-idrac-home" src="images/logo-idrac.png" />
        <div className="main-logo">
          <img className="main-logo-icon" src="images/wave.svg" />
          <p className="uhaina">Uhaina.fr</p>
          <p className="subtitle">Espace étudiant IDRAC</p>
        </div>
        <div className="identification-field">
          <div className="identification-pseudo-field">
            <input type="text" placeholder="Identifiant" />
          </div>
          <div className="identification-pwd-field">
            <input type="password" placeholder="Mot de passe" />
          </div>
          <button class="submit-button" type="submit">Accéder</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Index;