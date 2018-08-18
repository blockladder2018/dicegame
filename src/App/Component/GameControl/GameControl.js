import React from "react";
import Button from "antd";

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

const GameControl = (props) => {

  const {
    coinSideChosen,
    betRate,
    setCoinSideChosen,
    setBetRate,
  } = props;

  return (
    <div className="game-control">

      <div className="title">
        <img src="./src/images/coin.png" width="40" height="40" />
        <p>Coin Flip</p>
      </div>

      <div className="select-coin">
        <button
          onClick={() => {
            setCoinSideChosen("front");
          }}
        >
          <img className={coinSideChosen === "front" ? "" : "grey-image"} src="./src/images/coin-front.png" width="50" height="50" />
        </button>
        <button
          onClick={() => {
            setCoinSideChosen("back");
          }}
        >
          <img className={coinSideChosen === "back" ? "" : "grey-image"} src="./src/images/coin-back.png" width="50" height="50" />
        </button>
      </div>

      <div className="instruction">
        <p>Choose coin to bet on</p>
      </div>

      <div className="bet-rate-buttons">
        {
          BET_RATES.map(rate =>
            <Button
              key={rate.value}
              text={rate.text}
              value={rate.value}
              onClick={() => setBetRate(rate.value)}
            />
          )
        }
      </div>

      <div className="bet-rate-input">
        <button
          onClick={() => {
            const newBetRate = betRate - 0.01;
            if (newBetRate > 0 && newBetRate < 2.05) {
              setBetRate(newBetRate);
            }
          }}
        >
          <p className="text">-</p>
        </button>
        <input readOnly value={parseFloat(betRate).toFixed(2)} />
        <button
          onClick={() => {
            const newBetRate = betRate + 0.01;
            if (newBetRate > 0 && newBetRate < 2.05) {
              setBetRate(newBetRate);
            }
          }}
        >
          <p className="text">+</p>
        </button>
      </div>

      <div className="instruction">
        <p>Your bet</p>
      </div>
    </div>
  );
};

export default GameControl;
