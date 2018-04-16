import React from 'react';

import './styles.scss';

class Cours extends React.Component {
  render = () => {
    return (
      <div className="ressources-content">
        <iframe className="iframe-resources" src="http://ressources.davidvelten.fr/IDRAC%20Support%20de%20cours/" frameborder="0" height="150%" width="150%"></iframe>
      </div>
    );
  }
}

export default Cours;