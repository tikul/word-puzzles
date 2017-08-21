import React, { Component } from 'react';
import Constants from '../constants/constants';
import DiffBox from './DiffBox';

const AnagramDifficulties = Constants.AnagramDifficulties;
const GameModeDescriptions = Constants.GameModeDescriptions;

class Game extends Component{
  constructor(){
    super();
    this.state = {
      answerIsCorrect: null,
      phrase: null,
      difficulty: null,
      inGame: false,
    };
  }

  promptDifficulty(){
    if(this.props.currentGameType==="anagram"){
      const diffList = AnagramDifficulties.map( (value) => 
        <DiffBox name={value.name} 
        desc={value.description}
        isHighlighted={value.group===this.state.difficulty}
        onClick={()=>this.changeDifficulty(value.group)} />
      );
      return diffList;
    }
  }

  changeDifficulty(i){
    if(i !== this.state.difficulty){
      this.setState({
        difficulty: i,
      });
    }
  }

  render(){
    let title, desc;
    if(this.props.currentGameType===null){
      title = "Not found";
      desc = "Not found";
    }else{
      title = GameModeDescriptions[this.props.currentGameType].title;
      desc = GameModeDescriptions[this.props.currentGameType].desc;
    }
    
    return (
      <div id="main-game">
        <h1>{title}</h1>
        <h3>{desc}</h3>
        <div id="difficulties">
        {this.promptDifficulty()}
        </div>
      </div>
    );
  }
}

export default Game;