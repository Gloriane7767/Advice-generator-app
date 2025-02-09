import React from "react";
import DiceButton from "./DiceButton";

const AdviceCard = ({ advice, adviceId, onNewAdvice }) => {
  return (
    <div className="advice-box">
      <p className="advice-text">{adviceId ? `Advice #${adviceId}: ${advice}` : "Loading..."}</p>
      <DiceButton onClick={onNewAdvice} />
    </div>
  );
};

export default AdviceCard;