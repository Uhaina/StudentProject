import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MailProf from "./components/MailProf";

//Styles
import "./styles.scss";
//import { Switch, Route } from 'react-router-dom';

// pages

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <MailProf/>
        </div>
      </div>
    );
  }
}

export default App;
