import React, { Component } from 'react';
import {Message} from 'semantic-ui-react';

class AnswerStatus extends Component{

  render() {
    if(this.props.status===null){
      return null;
    }
    if(this.props.status===1){
      return (
      <Message positive>
        <Message.Header>Correct!</Message.Header>
        <p>The correct word was <b>{this.props.word}</b></p>
      </Message>
      );
    }else if(this.props.status===2){
      return (
      <Message negative>
        <Message.Header>Not quite the word the right word...</Message.Header>
      </Message>
      );
    }else{
      return (
      <Message info>
        <Message.Header>Changing words...</Message.Header>
        <p>The correct word was <b>{this.props.word}</b></p>
      </Message>
      );
    }
  }
}

export default AnswerStatus;