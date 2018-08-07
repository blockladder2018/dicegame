import React, { Component } from 'react';

import Styles from './HeaderStyles.css';

class Header extends Component {

  render() {
    return (
      <div className={Styles.header}>
        <a href="localhost:8080">Dice Game</a>
        <hr />
      </div>
    );
  }
}

export default Header;
