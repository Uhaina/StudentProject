import React from 'react';

import "./styles.scss";

const renduListDelaBDD = [{
    matiere : 'Soutenance Mission Consulting',
    dateRendu : 'Jeudi 19 Avril'
  }, {
    matiere : 'Strategic Project Management Oral',
    dateRendu : 'Vendredi 20 Avril'
  }, {
  matiere : "TD Purchasing",
  dateRendu : 'Mercredi 16 Mai'
}, {
  matiere : "Système d'information Dossier",
  dateRendu : 'Lundi 4 Juin'
}, {
  matiere : "Wordpress Social Network",
  dateRendu : 'Jeudi 7 Juin'
}, {
  matiere : "TOEIC Blanc",
  dateRendu : 'Jeudi 12 juillet'
}, {
  matiere : "Rendu Mémoire",
  dateRendu : 'Jeudi 12 juillet'
}, {
  matiere : "Busi Eng Line",
  dateRendu : 'Jeudi 12 juillet'
}, {
  matiere : "Partiel Growth International",
  dateRendu : 'Vendredi 13 juillet'
}, {
  matiere : "Partiel CSR Sustainable",
  dateRendu : 'Vendredi 13 juillet'
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