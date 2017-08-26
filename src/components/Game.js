import React, { Component } from 'react';
import Constants from '../constants/constants';
import DiffBox from './DiffBox';
import Words from '../constants/words.min';
import Draggable from 'react-draggable';
import Permutation from '../libs/shuffle';
import Answer from './Answer';
import {Button, Header} from 'semantic-ui-react';
import Status from './AnswerStatus';

const AnagramDifficulties = Constants.AnagramDifficulties;
const GameModeDescriptions = Constants.GameModeDescriptions;
const TileColors = Constants.TileColors;

class Game extends Component{
  constructor(){
    super();
    this.state = {
      answerCode: null,
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
      diffList.push(<Button color="blue" onClick={()=>this.changePhrase(3)}>New Word?</Button>);
      return diffList;
    }
  }

  changeDifficulty(i){
    if(i !== this.state.difficulty){
      this.setState({
        difficulty: i,
      }, ()=>{this.changePhrase(3)});
    }
  }

  renderPhrase(){
    if(this.props.currentGameType==="anagram"){
      if(this.state.cipheredPhrase !== null){
        const len = TileColors.length;
        let letterTiles = [];
        for(let i = 0; i < this.state.phrase.length; i++){
          letterTiles.push(
          <Draggable bounds="parent">
            <div className={"letter " + TileColors[i%len]} >{this.state.cipheredPhrase[i]}</div>
          </Draggable>);
        }
        return letterTiles;
      }
    }
  }

  changePhrase(i){
    if(this.props.currentGameType==="anagram"){
      if(this.state.difficulty !== null){
        let wordIndex = Math.floor(Math.random() * Words[this.state.difficulty].length);
        let newPhrase = Words[this.state.difficulty][wordIndex];
        let cipheredPhrase = Permutation(newPhrase);
        //
        console.log(Words[this.state.difficulty][wordIndex]);
        //
        this.setState({answerCode: i}, ()=>{
            setTimeout(()=>this.setState({
              phrase: newPhrase,
              cipheredPhrase: cipheredPhrase,
              answerCode: null,
            }), 2000);
        });
      }
    }
  }

  handleSubmit(s){
    if(this.state.phrase !== null){
      if(s === this.state.phrase){
        console.log("Correct!");
        this.changePhrase(1);
      }else{
        console.log("Not quite the word I was looking for...");
        this.setState({answerCode: 2}, ()=>{
            setTimeout(()=>this.setState({answerCode: null}), 2000);
        });
      }
    }
  }

  render(){
    const title = GameModeDescriptions[this.props.currentGameType].title;
    const desc = GameModeDescriptions[this.props.currentGameType].desc;
    
    return (
      <div id="main-game">
        <Header as="h1">{title}</Header>
        <Header as="h4">{desc}</Header>
        <div id="difficulties">
          {this.promptDifficulty()}
        </div>
        <div id="phrase-box" className={this.props.currentGameType==="home"?"no-show":""}>
          {this.renderPhrase()}
        </div>
        <Answer gameType={this.props.currentGameType} onSubmit={(e)=>this.handleSubmit(e)} />
        <Status status={this.state.answerCode} word={this.state.phrase} />
      </div>
    );
  }
}

export default Game;