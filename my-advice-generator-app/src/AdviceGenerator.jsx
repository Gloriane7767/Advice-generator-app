import React, { useState, useEffect } from "react";
import AdviceCard from "./AdviceCard";

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return <AdviceCard advice={advice} adviceId={adviceId} onNewAdvice={fetchAdvice} />;
};

export default AdviceGenerator;