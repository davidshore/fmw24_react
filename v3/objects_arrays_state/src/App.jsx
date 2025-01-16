import { useState } from "react";
import "./App.css";
import AddFruit from "./AddFruit";

// {
//   name: "Alice",
//   age: 25
// }

function App() {
  const [user, setUser] = useState({ name: "Sven", age: 50 });

  const [items, setItems] = useState(["apple", "banana"]);

  function handleAddFruit(fruit) {
    setItems([...items, fruit]);
  }

  function handleName(e) {
    const newUser = { ...user, name: e.target.value }; // Gör så här - Kallas för imutable update
    //user.name =  e.target.value // Gör inte så här - Detta kallas för mutable update
    setUser(newUser);
  }

  function handleAge(e) {
    const newUser = { ...user, age: e.target.value };

    setUser(newUser);
  }

  return (
    <div>
      <input value={user.name} type="text" onChange={handleName} />
      <input value={user.age} type="text" onChange={handleAge} />

      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <hr />

      <AddFruit handleAddFruit={handleAddFruit} />

      <h2>Fruit list</h2>
      {items.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}

export default App;
