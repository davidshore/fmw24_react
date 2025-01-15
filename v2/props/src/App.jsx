import "./App.css";
import List from "./List";
import InputWithLabel from "./InputWithLabel";
import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";
import logo from "/vite.svg";

// När man använder en komponent - kalla för att skapa en instans

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

  function handleChange(event) {
    console.log(event);

    console.log("Du skrev:", event.target.value);
  }

  return (
    <>
      <h1>Hello React</h1>

      <InputWithLabel
        label="Search:"
        id="search"
        onInputChange={handleChange}
      />

      <InputWithLabel
        label="Hello:"
        id="hello"
        type="number"
        onInputChange={handleChange}
      />

      <img src={logo} />

      <hr />

      <List list={stories} />

      <Button title="hej" size="small" imgSrc={logo} />
      <Button title="hello" size="large" imgSrc={logo} />

      <Button title="hello" size="medium" imgSrc={logo} />

      <ButtonWithChildren>Skicka</ButtonWithChildren>
    </>
  );
}

export default App;
