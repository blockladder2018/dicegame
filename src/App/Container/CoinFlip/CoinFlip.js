import React, { Component } from "react";
import { connect } from "react-redux";

import CoinFlipStore from "App/Redux/CoinFlipStore";
import {
  Header,
  Footer,
  GameControl,
  GameParameter,
  GameHistory,
} from "App/Component";

class CoinFlip extends Component {

  render () {
    const {
      coinSideChosen,
      betRate,
      setCoinSideChosen,
      setBetRate,
    } = this.props;

    return (
      <div id="rootContainer">
        <Header />
        <div className="game-section">
          <GameControl
            coinSideChosen={coinSideChosen}
            betRate={betRate}
            setCoinSideChosen={setCoinSideChosen}
            setBetRate={setBetRate}
          />
          <GameParameter
            winningChance='50'
            winningBetRate='1.96'
          />
          <GameHistory />
        </div>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = ({ coinFlip }) => {
  return {
    coinSideChosen: coinFlip.coinSideChosen,
    betRate: coinFlip.betRate,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCoinSideChosen: (coinSideChosen) => {
      dispatch(CoinFlipRedux.setCoinSideChosen(coinSideChosen));
    },
    setBetRate: (betRate) => {
      dispatch(CoinFlipRedux.setBetRate(betRate));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinFlip);
