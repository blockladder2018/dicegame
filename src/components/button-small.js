
import React from 'react';

const ButtonSmall = ({ text, value, onClick }) => {

  return (
    <button
      className="btn bet-rate-button"
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

export default ButtonSmall;
