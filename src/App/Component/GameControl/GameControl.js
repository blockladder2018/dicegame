import React from "react";
import { Button, InputNumber } from "antd";

import "./GameControlStyles.less";
import I18n, { keys as k } from "App/I18n";

const BET_RATES = [
  {
    "text": "0.05",
    "value": 0.05
  },
  {
    "text": "0.10",
    "value": 0.10
  },
  {
    "text": "0.15",
    "value": 0.15
  },
  {
    "text": "max",
    "value": 2.04
  }
];

const onChange = (e) => {
  console.log(`radio checked: ${e.target.value}`);
}

const GameControl = (props) => {

  const {
    coinSideChosen,
    betRate,
    setCoinSideChosen,
    setBetRate,
  } = props;

  return (
    <div className="game-control">
      <div className="title-section">
        <img className="icon" src="./src/App/Images/coin-light.png" />
        <h2 className="title-text">{I18n.t(k.L_Coin_flip)}</h2>
      </div>
      <div className="select-coin-section">
        <div className="two-coins">
          <button className="coin-button" onClick={() => {setCoinSideChosen("front")}}>
            <img className={coinSideChosen === "front" ? "" : "grey-image"} src="./src/App/Images/coin-head.png" width="50" height="50" />
          </button>
          <button className="coin-button" onClick={() => {setCoinSideChosen("back")}}>
            <img className={coinSideChosen === "back" ? "" : "grey-image"} src="./src/App/Images/coin-tail.png" width="50" height="50" />
          </button>
        </div>
        <p>{I18n.t(k.L_Choose_coin_to_bet_on)}</p>
      </div>

      <div className="bet-rate-section">
        <div className="bet-rate-button-section">
          {
            BET_RATES.map(rate =>
              <Button
                key={rate.value}
                className="small-button"
                type="primary"
                size="small"
                onClick={() => setBetRate(rate.value)}
              >
                {rate.text}
              </Button>
            )
          }
        </div>
        <div className="bet-rate-input-section">
          <InputNumber
            min={0.01}
            max={2.04}
            size="large"
            value={betRate}
            precision={2}
            onChange={(newValue) => setBetRate(newValue)}
            step={0.01}
          />
        </div>
        <p className="instruction-text">{I18n.t(k.L_Your_bet)}</p>
      </div>
    </div>
  );
};

export default GameControl;
