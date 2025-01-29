// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

//const hobbies = ["matlagning", "fotboll"]

//const hobbies = [{title: "matlagning", id: 1}, {title: "matlagning", id: 2}]

function App() {
  const [hobbies, setHobbies] = useState([]);

  const [text, setText] = useState("");

  function handleAdd() {
    const newHobbies = [...hobbies, text];

    setHobbies(newHobbies);
  }

  function handleDelete(i) {
    const newHobbies = hobbies.filter((hobby, index) => {
      return index != i;
    });

    setHobbies(newHobbies);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />{" "}
      <button onClick={handleAdd}>Add hobby</button>
      <h2>My hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => {
          return (
            <li className="flex gap-2 p-2" key={index}>
              <div>{hobby}</div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
