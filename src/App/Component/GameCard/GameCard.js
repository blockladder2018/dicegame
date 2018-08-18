import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const GameCard = ({title, description, icon, link}) => {
  return (
    <div className="game-card">
      <img src={icon} width="50" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={link}>
        <Button
          type="primary"
          size="large"
          onClick={() => console.log("button clicked")}
        >
          Play
        </Button>
      </Link>
    </div>
  );
};

export default GameCard;
