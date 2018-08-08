import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <a href="localhost:8080">Dice Game</a>
        <img src="./src/images/flag-usa.png" width="30" />
      </div>
    );
  }
}

export default Header;
