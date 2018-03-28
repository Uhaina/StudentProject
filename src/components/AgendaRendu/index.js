import React from 'react';

import "./styles.scss";

const renduListDelaBDD = [{
    matiere : 'Marketing',
    prof : 'John Doe',
    dateRendu : '14 Juillet'
  }, {
    matiere : 'Projet',
    prof: 'John Doe2',
    dateRendu : '15 Août'
  }];

class AgendaItem extends React.Component {
  render = () => {
    return (
      <div className="agenda-rendu-item">
        {this.props.matiere} {this.props.prof} {this.props.dateRendu}
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
        <table className="table-agenda">
          <tr>
            <th>Matière concernée</th>
            <th>Prof concerné</th>
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
                  <AgendaItem prof={rendu.prof}/>
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