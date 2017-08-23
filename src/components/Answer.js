import React, { Component } from 'react';

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
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>
          Answer:
          <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Answer;