import React from 'react';

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
            setCoinSideChosen('front');
          }}
        >
          <img className={coinSideChosen === 'front' ? "" : "grey-image"} src="./src/images/coin-front.png" width="50" height="50" />
        </button>
        <button
          onClick={() => {
            setCoinSideChosen('back');
          }}
        >
          <img className={coinSideChosen === 'back' ? "" : "grey-image"} src="./src/images/coin-back.png" width="50" height="50" />
        </button>
      </div>

      <div className="instruction">
        <p>Choose coin to bet on</p>
      </div>

      <div className="bet-rate-buttons">
        <button
          className="btn bet-rate-button"
          onClick={() => console.log("set bet rate")}
        >
          <p>0.05</p>
        </button>
        <button
          className="btn bet-rate-button"
          onClick={() => console.log("set bet rate")}
        >
          <p>0.10</p>
        </button>
        <button
          className="btn bet-rate-button"
          onClick={() => console.log("set bet rate")}
        >
          <p>0.15</p>
        </button>
      </div>

      <div className="bet-rate-input">
        <input value={betRate} />
        <p>Your bet</p>
      </div>

    </div>
  );
};

export default GameControl;
