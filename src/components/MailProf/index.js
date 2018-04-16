import React from 'react';

import './styles.scss';

class MailProf extends React.Component {
  render = () => {
    return (
      <div className="ressources-content">
        <iframe className="iframe-resources" src="http://ressources.davidvelten.fr/carnet-adresse-idrac/" frameborder="0" height="150%" width="150%"></iframe>
      </div>
    );
  }
}

export default MailProf;