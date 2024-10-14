import { useState } from "react";
import ButtonComp from "./ButtonComp";
function Counter() {
  const [count, setCount] = useState(0);

  function increaceButton() {
    setCount(count + 1);
  }
  function decreaceButton() {
    setCount(count - 1);
  }
  function resetButton() {
    setCount(0);
  }
  return (
    <section>
      <p>{count}</p>
      <ButtonComp name="Increase" handleClik={increaceButton} />
      <ButtonComp name="decrease" handleClik={decreaceButton} />
      <ButtonComp name="reset" handleClik={resetButton} />
    </section>
  );
}

export default Counter;
