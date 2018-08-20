import React from "react";

import "./GameParameterStyles.less";
import I18n, { keys as k } from "App/I18n";

const GameParameter = (props) => {

  const {
    winningChance,
    winningBetRate,
    totalInJackpot,
    betRate,
  } = props;

  return (
    <div className="game-parameter">
      <div className="row-section">
        <p className="small-text">{I18n.t(k.L_Winning_chance)}</p>
        <p className="large-text">{winningChance}%</p>
      </div>

      <div className="row-section">
        <p className="small-text">{I18n.t(k.L_Winning_bet_pays)}</p>
        <p className="large-text">{winningBetRate}x</p>
        <p className="highlight-text">{I18n.t(k.L_You_will_win, [betRate * winningBetRate])}</p>
        <p className="tiny-text">{I18n.t(k.L_Fee_to_jackpot, [1, 0.001])}</p>
      </div>

      <div className="row-section">
        <p className="small-text">{I18n.t(k.L_Jackpot_contains)}</p>
        <p className="large-text">{totalInJackpot + I18n.t(k.L_Currency_ETH)}</p>
        <p className="highlight-text">{I18n.t(k.L_Jackpot_chance, [0.1])}</p>
      </div>
    </div>
  );
};

export default GameParameter;
