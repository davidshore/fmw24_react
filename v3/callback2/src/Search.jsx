import { useState } from "react";

export default function Search(props) {
  const { handleChange, searchTerm } = props;

  // const [searchTerm, setSearchTerm] = useState("hej");

  // function handleChange(e) {
  //   setSearchTerm(e.target.value);
  // }

  return (
    <div>
      <h2>Search</h2>
      <label htmlFor="search">Search:</label>
      <input
        value={searchTerm}
        id="search"
        type="text"
        onChange={handleChange}
      />

      {/* <p>
        Searching for <strong>{searchTerm}</strong>.
      </p> */}
    </div>
  );
}
