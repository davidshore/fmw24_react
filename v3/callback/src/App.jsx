import { useState } from "react";
import "./App.css";
import Search from "./Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <h2>App</h2>
      Du söker på:{searchTerm}
      <hr />
      <Search handleChange={handleChange} />
    </div>
  );
}

export default App;
