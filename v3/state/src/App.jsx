import "./App.css";
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

// Vanliga variabler renderar(ritar) inte om komponenten när dom ändras

function App() {
  //let counter = 0;

  //const arr = useState(0);
  const [counter, setCounter] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    //counter += 1;
    //setCounter(counter + 1);

    // Med arrow-function uppdatering
    setCounter((counter) => {
      return counter + 1;
    });

    console.log("Counter är just nu:", counter);
  }

  function renderCountText() {
    if (counter < 5) {
      return <div>Count is less than 5</div>;
    } else if (counter < 10) {
      return <div>Count is more than or equal to 5</div>;
    } else {
      return <div>Count is more than or equal to 10</div>;
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Klicka</button>
      Counter är just nu: {counter}
      <br />
      <hr />
      <br />
      <button
        onClick={() => {
          setShowPopup(true);
        }}
      >
        Visa popup
      </button>
      {showPopup && (
        <div className="popup">
          <button
            onClick={() => {
              setShowPopup(false);
            }}
          >
            x
          </button>
          <h2>Min popup</h2>
        </div>
      )}
      {/* {counter < 5 ? (
        <div>Count is less than 5</div>
      ) : (
        <div>Count is more than or equal to 5</div>
      )} */}
      {renderCountText()}
      <br />
      <hr />
      <br />
      <CounterDisplay counter={counter} />
    </div>
  );
}

export default App;
