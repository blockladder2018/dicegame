import React from 'react';

const GameCard = ({title, description, icon}) => {
  return (
    <div className="game-card">
      <img src={icon} width="50" />
      <h4>{title}</h4>
      <p>{description}</p>
      <button
        className="btn large-button"
        onClick={() => console.log("button clicked")}
      >
        Play now
      </button>
    </div>
  );
};

export default GameCard;
