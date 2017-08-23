import React, { Component } from 'react';
import {Container, Form, Button} from 'semantic-ui-react';

class Answer extends Component{
  constructor(){
    super();
    this.state = {
      value: '',
    };
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    })
  }

  render(){
    return (
      <Container className="answer-container">
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <Form.Input placeholder="Answer..." name="answer"
          value={this.state.value} onChange={(e)=>this.handleChange(e)} />
          <Form.Button content="Submit" />
        </Form>
      </Container>
    );
  }
}

export default Answer;