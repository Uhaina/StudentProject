import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Index extends React.Component {
  render = () => {
    return (
      <div className="body-login-content">
      <div className="login-content">
        <img className="logo-idrac-home" src="/images/logo-idrac.png" />
        <div className="main-logo">
          <img className="main-logo-icon" src="/images/wave.svg" />
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
          <Link  to="/backoffice"><button class="submit-button-home" type="submit">Accéder</button></Link>
        </div>
        <p className="copyright">© Master Promo 2019 - Tous droits réservés - 2018</p>
      </div>
      </div>
    );
  }
}

export default Index;