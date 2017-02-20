import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import Areas from './components/areas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [],
      list: []
    }
  }
  componentDidMount() {
    this.callAreasAPI('https://code-your-future.github.io/api-demo/area/index.json');
  }
  onValue(val) {
    this.callListsAPI(`https://code-your-future.github.io/api-demo/area/${val}/index.json`);

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Areas areas={this.state.areas} onClick={this.onValue} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  callAreasAPI = (adress) => {
    fetch(adress)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({
        areas: json.data
      })
    });
  }
  // https://code-your-future.github.io/api-demo/area/index.json
  callListsAPI = (adress) => {
    fetch(adress)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({
        list: json.data
      })
    });
  }
}

export default App;
