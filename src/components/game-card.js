import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({title, description, icon, link}) => {
  return (
    <div className="game-card">
      <img src={icon} width="50" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={link}>
        <button
          className="btn large-button"
          onClick={() => console.log("button clicked")}
        >
          <p className="button-text">Play now</p>
        </button>
      </Link>
    </div>
  );
};

export default GameCard;
