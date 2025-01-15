import "./CounterDisplay.css";
import { useState } from "react";

export default function CounterDisplay(props) {
  const { counter } = props;

  const [counter2, setCounter2] = useState(0);

  return (
    <div className="counterDisplay">
      <h2>Counter display</h2>
      {counter}
      <h2>Counter2 internal state</h2>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        update counter2
      </button>
      <br />
      Counter2 is:{counter2}
    </div>
  );
}
