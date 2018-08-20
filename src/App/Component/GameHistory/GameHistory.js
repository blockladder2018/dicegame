import React, { Component } from "react";
import axios from "axios";

import "./GameHistoryStyles.less";
import I18n, { keys as k } from "App/I18n";

class GameHistory extends Component {

  componentWillMount() {
    this.setState({
      history:
        {
          "games": [
            {
              "id": 56972,
              "tx_hash": "0x388bff68e9d5f8cd6a4e6765b426301b2fa2e13efba608b09e11f888e6fb284a",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0xe5aaf4c14176b4eaa648c494ea465c136a9c016d3d3cbc1822e74ca0be81f521",
              "reveal": "0xa7721226d7bbaad8f2321633b85279bc29104a7f2b6ccf9a23020d325598d107",
              "bet_mask": "2",
              "amount": "800000000000000000",
              "reveal_tx_hash": "0x1c46cf88ed3ab11a10b47fa2382ee5dc8ebb8d1a9167ff721dbb40fff5c77348",
              "dice_payment": "1582000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x9966dc66995927241830a790105f386e3a2d760b8ea1b591dcd1e6f222735e9b",
              "bet_block_number": 6150480,
              "reveal_block_hash": null
            },
            {
              "id": 56977,
              "tx_hash": "0x7566582dc2349d9176de226dbe101d0fb7fc8da3a7a9a706aee5f9828f6db98f",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0x17c4a865a702f36ea1d6d6bfec5a5d5c500f4448856c72f9c89bb9e8e371065c",
              "reveal": "0x0bd2c1c3657d51f41ddbfad8be20e51b783916baf94c0db28bba3f404fe68792",
              "bet_mask": "2",
              "amount": "460000000000000000",
              "reveal_tx_hash": "0xa193bbd3d5288d86b302ab4d5e251b4657a61fb767a7c27861f820dfa4e88e07",
              "dice_payment": "908800000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0xe10bacb2a2e94ba12bb13541fae3ebde2a0290d604eb2ab883310c4468b4ef4f",
              "bet_block_number": 6150485,
              "reveal_block_hash": "0x3107b16c0854168612f53d00d4f044b41a04eb157a5aca25c8b636c913902667"
            },
            {
              "id": 56972,
              "tx_hash": "0x388bff68e9d5f8cd6a4e6765b426301b2fa2e13efba608b09e11f888e6fb284a",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0xe5aaf4c14176b4eaa648c494ea465c136a9c016d3d3cbc1822e74ca0be81f521",
              "reveal": "0xa7721226d7bbaad8f2321633b85279bc29104a7f2b6ccf9a23020d325598d107",
              "bet_mask": "2",
              "amount": "800000000000000000",
              "reveal_tx_hash": "0x1c46cf88ed3ab11a10b47fa2382ee5dc8ebb8d1a9167ff721dbb40fff5c77348",
              "dice_payment": "1582000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x9966dc66995927241830a790105f386e3a2d760b8ea1b591dcd1e6f222735e9b",
              "bet_block_number": 6150480,
              "reveal_block_hash": "0x7b7d641fb72af3b7b24e879e37e40ac60337ab8835bd45bc5496d2dcf2e0e6e3"
            }
          ]
        }
    });
  }

  renderGames(games) {
    return games.map(game =>
      <div className="history-row">
        <div>
          <p>{game.address_from.substring(0, 8)}</p>
        </div>
        <div>
          <p>{(game.amount / 3000000000000000000).toFixed(2)}</p>
        </div>
        <div>
          <img src={game.bet_mask === "1" ? "./src/App/Images/coin-head.png" : "./src/App/Images/coin-tail.png"} width="15" height="15" />
        </div>
        <div>
          <img src={game.dice_payment === "0" && game.bet_mask === "1" ? "./src/App/Images/coin-tail.png" : "./src/App/Images/coin-head.png"} width="15" height="15" />
        </div>
        <div>
          <p>{(game.dice_payment / 3000000000000000000).toFixed(2)}</p>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.history) {
      return null;
    }

    return (
      <div className="game-history">
        <p className="title">{I18n.t(k.L_Game_history)}</p>
        <div className="caption-section">
          <p>{I18n.t(k.L_Player)}</p>
          <p>{I18n.t(k.L_Bet)}</p>
          <p></p>
          <p>{I18n.t(k.L_Result)}</p>
          <p></p>
        </div>
        {this.renderGames(this.state.history.games)}
      </div>
    );
  }
};

export default GameHistory;
