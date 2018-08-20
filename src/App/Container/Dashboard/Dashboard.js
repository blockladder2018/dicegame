import React, { Component } from "react";
import { Layout, Divider } from "antd";

import "./DashboardStyles.less";
import {
  Head,
  Foot,
  GameCard
} from "App/Component";
import I18n, { keys as k } from "App/I18n";

const Games = [
  {
    "title": I18n.t(k.L_Coin_flip),
    "intro": I18n.t(k.L_Coin_flip_intro),
    "winningPay": I18n.t(k.L_Coin_flip_winning_pay, [1.98]),
    "icon": "./src/App/Images/coin-light.png",
    "link": "/coin-flip",
  },
  {
    "title": I18n.t(k.L_Roll_a_dice),
    "intro": I18n.t(k.L_Roll_a_dice_intro),
    "winningPay": I18n.t(k.L_Roll_a_dice_winning_pay, [5.94]),
    "icon": "./src/App/Images/dice-light.png",
    "link": "/dice",
  },
  {
    "title": I18n.t(k.L_Two_dice),
    "intro": I18n.t(k.L_Two_dice_intro),
    "winningPay": I18n.t(k.L_Two_dice_winning_pay, [35.64]),
    "icon": "./src/App/Images/dices-light.png",
    "link": "./two-dice",
  }
];

class Dashboard extends Component {

  render () {
    const { Header, Footer, Content } = Layout;

    return (
      <Layout className="dashboard">
        <Header className="header">
          <Head />
        </Header>
        <Divider />
        <Content className="content">
          {this.renderGameCards()}
        </Content>
        <Divider />
        <Footer className="footer">
          <Foot />
        </Footer>
      </Layout>
    );
  }

  renderGameCards() {
    console.log(Games);
    return Games.map(game =>
      <GameCard
        key={game.title}
        title={game.title}
        intro={game.intro}
        winningPay={game.winningPay}
        icon={game.icon}
        link={game.link}
      />
    );
  }
};

export default Dashboard;
