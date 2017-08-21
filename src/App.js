import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import Menu from './components/Menu';
import DiffBox from './components/DiffBox';
import Constants from './constants/constants';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentGameType: "anagram",
      menuIsShowing: false,
    };
  }

  handleMenuClick(i){
    if(i !== this.state.currentGameType){
      this.setState({
        currentGameType: i,
      });
    }
  }

  handleMenuToggle(){
    this.setState({menuIsShowing: !this.state.menuIsShowing});
  }

  render(){
    return (
      <div className="App">
        <Header onClick={() => this.handleMenuToggle()} />
        <Menu isShowing={this.state.menuIsShowing} onClick={(i) => this.handleMenuClick(i)} />
        <Game currentGameType={this.state.currentGameType} />
      </div>
    );
  }
}

export default App;
