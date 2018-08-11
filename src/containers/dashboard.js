import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import GameCard from '../components/game-card';

const Games = [
  {
    "title": "Coin flip",
    "description": "Heads or tails? Fifty-fifty",
    "icon": "./src/images/coin.png"
  },
  {
    "title": "Roll a dice",
    "description": "Bet on numbers, 1 ot 6",
    "icon": "./src/images/dice.png"
  },
  {
    "title": "Two dice",
    "description": "Bet on sum, 2 to 12",
    "icon": "./src/images/dices.png"
  }
];

class Dashboard extends Component {

  render () {
    return (
      <div id="rootContainer">
        <Header />
        <div className="game-card-list">
          {this.renderGameCards()}
        </div>
        <Footer />
      </div>
    );
  }

  renderGameCards() {
    return Games.map(game =>
      <GameCard
        key={game.title}
        title={game.title}
        description={game.description}
        icon={game.icon}
      />
    );
  }
};

export default Dashboard;
