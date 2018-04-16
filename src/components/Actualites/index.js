import React from 'react';

import './styles.scss';

class Actualites extends React.Component {
  render = () => {
    return(
<div className="actu-content">
      <h2 className="actualite-title"> Espace étudiant IDRAC M2 - 2019 - Accueil</h2>
      <div className="actualites-component">
        <div className="pic">
          <img className="home-pic" src="/images/undraw.svg" />
        </div>
        <div className="actualite-info-container">
          <div className="one-container-info">
            <h3> Actu BDE </h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque debitis, ducimus eius eligendi explicabo</div>
          <div className="one-container-info">
            <h3>News IDRAC</h3>
            Remplacement du Quick par Burger King en Juillet !!!!!!!!!!!!!!!!!!!! o/</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Actualites;