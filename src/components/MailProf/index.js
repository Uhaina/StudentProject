import React from 'react';

import "./styles.scss";

const profListDeLaBDD = [{
  mail: 'test@gmail.com',
  fullName: 'John Doe'
}, {
  mail: 'test@gmail.com',
  fullName: 'John Doe 2'
}, {
  mail: 'test@gmail.com',
  fullName: 'John Doe 3'
}, {
  mail: 'test@gmail.com',
  fullName: 'John Doe 4'
}, {
  mail: 'test@gmail.com',
  fullName: 'John Doe 5'
}];

class MailProfItem extends React.Component {
  render = () => {
    return (
      <div className="mail-prof-item">
        {this.props.fullName} {this.props.mail}
      </div>
    );
  }
}

class MailProfList extends React.Component {
  render = () => {
    // récupération des profs dans la base de données
    // exemple de fonction ....
    const profList = profListDeLaBDD;

    return (
      <div className="mail-prof-list">
        <h2 className="mailProf-title">Mails des profs</h2>
        <div className="input-ajout-de-prof">
          <div className="mail">
            <input class="email-field" required="required" type="email" name="mail" spellcheck="false" placeholder="Adresse mail" />
          </div>
          <div className="separator-field">|</div>
          <div className="nom">
            <input class="name-field" required="required" type="text" name="nom" spellcheck="false" placeholder="Nom Prénom" />
          </div>
          <div className="separator-field-button">|</div>
          <button class="submit-button" type="submit">Ajouter</button>
        </div>
        <table className="table-prof-list">
          <tr>
            <th>Salut</th>
            <th>Test</th>
          </tr>
          <tr>
            <td>
              {
                profList.map(function(prof) {
                  return (
                    <MailProfItem fullName={prof.fullName} />
                  );
                })
              }
            </td>
            <td>
              {
                profList.map(function(prof) {
                  return (<MailProfItem mail={prof.mail} />
                  );
                })
              }
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MailProfList;