import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([{ title: "städa" }]);

  function addTodo(title) {
    const todo = {
      title,
      done: false,
      id: Date.now(),
    };

    const newTodoList = [...todoList, todo];

    console.log("newTodoList", newTodoList);

    setTodoList(newTodoList);
  }

  return (
    <TodoContext.Provider value={{ todoList, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
