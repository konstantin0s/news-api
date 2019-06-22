import React, { Component } from 'react';
import './App.css';
import News from './components/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="#" className="brand-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col 8">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
