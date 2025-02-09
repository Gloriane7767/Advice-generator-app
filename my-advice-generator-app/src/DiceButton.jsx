import React from "react";

const DiceButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="dice-button">
      <span className="dice-icon">🎲</span>
    </button>
  );
};

export default DiceButton;