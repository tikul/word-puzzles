import React, { Component } from 'react';
import Constants from '../constants/constants';
import {Header, Icon, Menu} from 'semantic-ui-react';

const GameModeDescriptions = Constants.GameModeDescriptions;

class NavTop extends Component{
  render(){
    return (
      <Menu secondary>
        <Menu.Item name="Home" as="a"
        active={this.props.gameType==="home"}
        onClick={()=>this.props.onClick("home")}/>
        <Menu.Item name="Anagram" as="a" 
        active={this.props.gameType==="anagram"} 
        onClick={()=>this.props.onClick("anagram")}/>
        <Menu.Item name="Cipher" as="a" 
        active={this.props.gameType==="cipher"} 
        onClick={()=>this.props.onClick("cipher")}/>
      </Menu>
    );
  }
}

export default NavTop;