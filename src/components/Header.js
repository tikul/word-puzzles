import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <div id="header">
        <div id="header-narrow">
          <span onClick={this.props.onClick} className="menu-icon" >menu button</span>
        </div>
      </div>
    );
  }
}

export default Header;