import React, { Component } from 'react';

import Styles from './GameCardStyles.css';

class GameCard extends Component {

  render() {
    return (
      <div>
        <h1>Game Title</h1>
        <h3>Game Discription</h3>
        <button
          className="btn"
          onClick={() => console.log("button clicked")}
        >
          Play now
        </button>
      </div>
    );
  }
}

export default GameCard;
