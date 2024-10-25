import { useState, useEffect } from "react";

function RandomAdviceRendering() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const getAdvice = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    };
    getAdvice();
  }, []);
  return (
    <h6
      style={{
        backgroundColor: "palegreen",
        borderRadius: "2px",
        color: "green",
      }}
    >
      this is your Advice: {advice}
    </h6>
  );
}
export default RandomAdviceRendering;
