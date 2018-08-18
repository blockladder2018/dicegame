import React, { Component } from "react";
import { Layout, Divider } from "antd";

// import Header from "../components/header";
// import Footer from "../components/footer";
// import GameCard from "../components/game-card";

const Games = [
  {
    "title": "Coin flip",
    "description": "Heads or tails? Fifty-fifty",
    "icon": "./src/images/coin.png",
    "link": "/coin-flip"
  },
  {
    "title": "Roll a dice",
    "description": "Bet on numbers, 1 ot 6",
    "icon": "./src/images/dice.png",
    "link": "/dice"
  },
  {
    "title": "Two dice",
    "description": "Bet on sum, 2 to 12",
    "icon": "./src/images/dices.png",
    "link": "./two-dice"
  }
];

class Dashboard extends Component {

  render () {
    const { Header, Footer, Content } = Layout;

    return (
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }

  renderGameCards() {
    return Games.map(game =>
      <GameCard
        key={game.title}
        title={game.title}
        description={game.description}
        icon={game.icon}
        link={game.link}
      />
    );
  }
};

export default Dashboard;
