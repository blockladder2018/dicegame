import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./GameCardStyles.less";
import I18n, { keys as k } from "App/I18n";

const GameCard = ({title, intro, winningPay, icon, link}) => {
  return (
    <div className="game-card">
      <img className="game-icon" src={icon} alt={icon} />
      <h2 className="title">{title}</h2>
      <p>{intro}</p>
      <p>{winningPay}</p>
      <Link class="button-section" to={link}>
        <Button
          type="primary"
          size="large"
        >
          {I18n.t(k.L_Play)}
        </Button>
      </Link>
    </div>
  );
};

export default GameCard;
