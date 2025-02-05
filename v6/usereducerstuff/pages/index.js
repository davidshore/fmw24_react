import { useReducer, useState } from "react";

// Action object:
// const action = { type: "increment" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    case "resetText":
      return { ...state, text: "" };

    case "setText":
      return { ...state, text: action.text };

    default:
      return state;
  }

  // if (action.type == "increment") {
  //   return { count: state.count + 1 };
  // } else if (action.type == "decrement") {
  //   return { count: state.count - 1 };
  // } else if (action.type == "reset") {
  //   return { count: 0 };
  // } else {
  //   return state;
  // }
}

export default function Home() {
  const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  const [state, dispatch] = useReducer(reducer, { count: 0, text: "hej" });

  return (
    <div>
      <p>Räknare useState: {count}</p>
      <button onClick={() => setCount(count + 1)}>Öka</button>
      <button onClick={() => setCount(count - 1)}>Minska</button>
      <button onClick={() => setCount(0)}>Återställ</button>

      <br />
      <br />

      <p>Räknare useReducer: {state.count}</p>
      <p>Text med useReducer: {state.text}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Öka</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Minska</button>
      <button onClick={() => dispatch({ type: "reset" })}>Återställ</button>

      <input
        type="text"
        onChange={(e) => dispatch({ type: "setText", text: e.target.value })}
      />
    </div>
  );
}
