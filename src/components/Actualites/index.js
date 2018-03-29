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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque debitis, ducimus eius eligendi explicabo facilis harum itaque mollitia, nulla pariatur praesentium quasi repellat similique. Dolor doloremque enim minus?</div>
          <div className="one-container-info">
            <h3>News IDRAC</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus ea impedit magni non officia qui quis sed voluptas. Atque enim eos ipsum iusto, maiores maxime minima nesciunt perspiciatis repellat! efojnoenvoqjndfvojnqsodvjnqojdnvqoj</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Actualites;