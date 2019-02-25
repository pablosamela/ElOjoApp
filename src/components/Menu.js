import React, { Component } from 'react';

class Menu extends Component {
  
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sections: []
    }
    this.loadFromServer = this.loadFromServer.bind(this);
 
  }
  
  loadFromServer () {
    fetch(
      'http://www.elojodigital.com/all-sections-json',
      {
        mode: "cors",
        method: 'GET'
      }
    )
    .then(
      res => res.json()
    )
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          sections: result.sections
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  
  componentDidMount() {
    this.loadFromServer();   
  }

  render() {
    const { error, isLoaded, sections } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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
                { sections.map((section,i) => (
                  <li className="nav-item active" key={i}>
                    <a href="{{ section.section.id }}" className="nav-link" title="{{ section.section.description }}">
                      { section.section.name }
                    </a>
                  </li>
                )) 
                }
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}

export default Menu;