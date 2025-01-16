import "./App.css";
import { useState } from "react";
import Search from "./Search";
import List from "./List";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("React");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const filteredStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>App</h2>
      Du söker på:{searchTerm}
      <hr />
      <Search searchTerm={searchTerm} handleChange={handleChange} />
      <hr />
      <List list={filteredStories} />
    </div>
  );
}

export default App;
