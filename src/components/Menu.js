import React, { Component } from 'react';
import sections from '../data/sections';

class Menu extends Component {
  
  constructor (){
    super();
    this.state = {
      sections: []
    }
    this.loadFromServer = this.loadFromServer.bind(this);
 
  }
  
  
  loadFromServer () {
    fetch('http://www.elojodigital.com/all-sections-json').then(
      (response) => {
        this.setState({ sections: response.json() });
      }
    ).bind(this);
  }
  
  componentDidMount() {
    this.loadFromServer();   
  }

  render() {
    const sections = this.state.sections.map((section,i) => {
      return (
        <li className="nav-item active">
          <a href="{sections.id}" className="nav-link" title="{ sections.description }">{ sections.name }</a>
        </li>
      )
    });

    return (
      <nav className="navigation navbar navbar-black bg-black navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse mx-auto collapse" id="mainNavbar">
            <ul className="navbar-nav text-uppercase">
            <li className="nav-item active">
              <a href="/" className="nav-link" title="El Ojo digital">Inicio</a>
            </li>
            { sections }
            
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;