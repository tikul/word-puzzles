import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import NavTop from './components/NavTop';
import DiffBox from './components/DiffBox';
import Constants from './constants/constants';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentGameType: "anagram",
    };
  }

  handleMenuClick(i){
    if(i !== this.state.currentGameType){
      this.setState({
        currentGameType: i,
      });
    }
  }

  render(){
    return (
      <div className="App">
        <NavTop onClick={(x) => this.handleMenuClick(x)} gameType={this.state.currentGameType} />
        <Game currentGameType={this.state.currentGameType} />
      </div>
    );
  }
}

export default App;
