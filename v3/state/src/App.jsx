import "./App.css";
import { useState } from "react";

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

  return (
    <div>
      <button onClick={handleClick}>Klicka</button>
      Counter är just nu: {counter}
      <hr />
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
    </div>
  );
}

export default App;
