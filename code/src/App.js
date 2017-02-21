import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import Areas from './components/areas';
import AddList from './components/addList';

// TODO: you have to bring the data ones and filter it to make your app faster
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [],
      list: [],
      filteredList: [],
      obj: {}
    }
  }
  componentDidMount() {
    this.callAreasAPI('https://code-your-future.github.io/api-demo/area/index.json');
    this.callListsAPI(`https://code-your-future.github.io/api-demo/index.json`);
  }
  onValue = (val) => {
    // to chech if the area value has a (-)
    let newVal = val;
    if(val ==="234-244-Stockwell-Road"){
      newVal = "234-244 Stockwell Road";
    }else if(val === 'N-A') {
      newVal = 'N/A';
    }else if(val.includes('-')){
      newVal = val.replace(/-/g, ' ');
      console.log(newVal);
    }
    const filteredListVar = this.state.list.filter((areas) => {
      return areas.area === newVal;
    });
    this.setState({filteredList:filteredListVar});
  }
  onAddList = (event) => {
    this.setState({})
  }
  addObj = (e) => {
    this.setState({obj:e.target});
    console.log(this.state.obj);
  }
  render() {
    return (
      <div className="App">
        <div className="Areas">
          <Areas areas={this.state.areas} onClick={this.onValue} />
        </div>
        <div className="Lists">
          <List list={this.state.filteredList}/>
        </div>
        <div className="add-list">
          <AddList onAddList={this.onAddList} addObj={this.addObj}/>
        </div>
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
