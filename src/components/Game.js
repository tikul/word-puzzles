import React, { Component } from 'react';
import Constants from '../constants/constants';
import DiffBox from './DiffBox';
import Words from '../constants/words.min';
import Draggable from 'react-draggable';
import Permutation from '../libs/shuffle';
import Answer from './Answer';
import {Button, Header} from 'semantic-ui-react';

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
      cipheredPhrase: null,
    };
  }

  promptDifficulty(){
    if(this.props.currentGameType==="anagram"){
      let diffList = AnagramDifficulties.map( (value) => 
        <DiffBox name={value.name} 
        desc={value.description}
        isHighlighted={value.group===this.state.difficulty}
        onClick={()=>this.changeDifficulty(value.group)} />
      );
      diffList.push(<Button color="blue" onClick={()=>this.changePhrase()}>New Word?</Button>);
      return diffList;
    }
  }

  changeDifficulty(i){
    if(i !== this.state.difficulty){
      this.setState({
        difficulty: i,
      }, ()=>{this.changePhrase()});
    }
  }

  renderPhrase(){
    if(this.props.currentGameType==="anagram"){
      if(this.state.cipheredPhrase !== null){
        let letterTiles = [];
        for(let i = 0; i < this.state.phrase.length; i++){
          letterTiles.push(
          <Draggable bounds="parent">
            <div className="letter">{this.state.cipheredPhrase[i]}</div>
          </Draggable>);
        }
        return letterTiles;
      }
    }
  }

  changePhrase(){
    if(this.props.currentGameType==="anagram"){
      if(this.state.difficulty !== null){
        let wordIndex = Math.floor(Math.random() * Words[this.state.difficulty].length);
        let newPhrase = Words[this.state.difficulty][wordIndex];
        let cipheredPhrase = Permutation(newPhrase);
        //
        console.log(Words[this.state.difficulty][wordIndex]);
        //
        this.setState({
          phrase: newPhrase,
          cipheredPhrase: cipheredPhrase,
        });
      }
    }
  }

  handleSubmit(s){
    if(this.state.phrase !== null){
      if(s === this.state.phrase){
        console.log("Correct!");
      }else{
        console.log("Not quite the word I was looking for...");
      }
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
        <Header as="h1">{title}</Header>
        <Header as="h4">{desc}</Header>
        <div id="difficulties">
          {this.promptDifficulty()}
        </div>
        <div id="phrase-box">
          {this.renderPhrase()}
        </div>
        <Answer onSubmit={(e)=>this.handleSubmit(e)} />
      </div>
    );
  }
}

export default Game;