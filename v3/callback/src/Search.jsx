import { useState } from "react";

export default function Search(props) {
  const { handleChange } = props;

  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <h2>Seach</h2>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}
