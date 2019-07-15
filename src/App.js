import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import Sidenews from './components/Sidenews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <h1>News Feed</h1>
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/news-api" className="brand-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="container-fluid mt-5 ml-3">
          <div className="row">
            <div className="col xs-8 col-md-8 col-lg-8 container-wrapper">
              <News news={this.state.news1} />
              <News news={this.state.news2} />
            </div>
            <div className="col-md-4">
              <Sidenews news={this.state.news3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
