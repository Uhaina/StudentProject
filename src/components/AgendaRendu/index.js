import React from 'react';

import "./styles.scss";

const renduListDelaBDD = [{
    matiere : 'Marketing',
    dateRendu : '14 Juillet'
  }, {
    matiere : 'Projet',
    dateRendu : '15 Août'
  }];

class AgendaItem extends React.Component {
  render = () => {
    return (
      <div className="agenda-rendu-item">
        {this.props.matiere} {this.props.dateRendu}
      </div>
    );
  }
}

class AgendaRendu extends React.Component {
  render = () => {
    const renduList = renduListDelaBDD;

    return (
      <div className="agenda-list-rendu">
        <h2 className="agenda-title"> Agenda des rendu des profs </h2>
        <div className="input-ajout-de-prof">
          <div className="mail">
            <input class="email-field" required="required" type="email" name="mail" spellcheck="false" placeholder="Matière" />
          </div>
          <div className="separator-field">|</div>
          <div className="nom">
            <input class="name-field" required="required" type="text" name="nom" spellcheck="false" placeholder="Date Rendu" />
          </div>
          <div className="separator-field-button">|</div>
          <button class="submit-button" type="submit">Ajouter</button>
        </div>
        <table className="table-agenda">
          <tr>
            <th>Matière concernée</th>
            <th>Date de rendu finale</th>
          </tr>
          <tr>
            <td>
              {
                renduList.map(function (rendu) {
                  return(
                    <AgendaItem matiere={rendu.matiere}/>
                    )
                })
              }
            </td>
            <td>
              {
                renduList.map(function (rendu) {
                  return (
                  <AgendaItem dateRendu={rendu.dateRendu}/>
                  )
                })
              }
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default AgendaRendu;