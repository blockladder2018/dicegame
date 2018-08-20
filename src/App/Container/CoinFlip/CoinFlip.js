import React, { Component } from "react";
import { Layout, Divider } from "antd";
import { connect } from "react-redux";

import "./CoinFlipStyles.less";
import { CoinFlipController } from "App/Controller";
import {
  Head,
  Foot,
  GameControl,
  GameParameter,
  GameHistory,
} from "App/Component";

class CoinFlip extends Component {

  render () {
    const { Header, Footer, Content } = Layout;
    const { coinSideChosen, betRate } = this.props;

    return (
      <Layout className="coin-flip">
        <Header className="header">
          <Head />
        </Header>
        <Divider />
        <Content className="content">
          <GameControl
            coinSideChosen={coinSideChosen}
            betRate={betRate}
            setCoinSideChosen={CoinFlipController.setCoinSideChosen}
            setBetRate={CoinFlipController.setBetRate}
          />
          <GameParameter
            winningChance='50'
            winningBetRate='1.96'
          />
        </Content>
        <Divider />
        <Footer className="footer">
          <Foot />
        </Footer>
      </Layout>
    );
  }
};

const mapStateToProps = ({ coinFlip }) => {
  return {
    coinSideChosen: coinFlip.coinSideChosen,
    betRate: coinFlip.betRate,
  }
};

export default connect(mapStateToProps)(CoinFlip);
