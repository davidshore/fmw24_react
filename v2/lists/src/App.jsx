import "./App.css";
import List from "./List";
import Search from "./Search";

// React = Reagera
// Reagerar på förändingar i tillstånd (state)

function getTitle(title) {
  return title;
}

// const reultatAvMap = list.map(item => {
//   return <li>{item.title}</li>
// })

// reultatAvMap = ["React", "Redux"]

// reultatAvMap = [<li>React</li>,<li>Redux</li>]

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

function App() {
  return (
    <>
      <h1>Hello {getTitle("React")}</h1>

      <Profile />

      <Search />

      <hr />

      <List />
    </>
  );
}

export default App;
