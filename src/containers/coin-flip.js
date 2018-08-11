import React, { Component } from 'react';
import { connect } from 'react-redux';

import CoinFlipRedux from '../redux/reducer-coin-flip';
import Header from '../components/header';
import Footer from '../components/footer';
import GameControl from '../components/game-control';
import GameParameter from '../components/game-parameter';
import GameHistory from '../components/game-history';

class CoinFlip extends Component {

  render () {
    return (
      <div id="rootContainer">
        <Header />
        <div className="game-section">
          <GameControl
            coinSideChosen={this.props.coinSideChosen}
            betRate={this.props.betRate}
            setCoinSideChosen={this.props.setCoinSideChosen}
            setBetRate={this.props.setBetRate}
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
