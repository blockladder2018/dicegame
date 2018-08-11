import React from 'react';

const GameParameter = (props) => {

  const {
    winningChance,
    winningBetRate,
  } = props;

  return (
    <div>
      <div>
        <p>Winning chance</p>
        <p>{winningChance}%</p>
      </div>
      <div>
        <p>Winnign bet pays</p>
        <p>{winningBetRate}x</p>
      </div>
    </div>
  );
};

export default GameParameter;
