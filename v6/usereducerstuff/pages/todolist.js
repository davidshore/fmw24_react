import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, todoList: [...state.todoList, action.todo] };

    case "delete":
      const filteredTodoList = state.todoList.filter(
        (_, index) => index != action.index
      );
      return { ...state, todoList: filteredTodoList };

    default:
      return state;
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, {
    todoList: [{ title: "städa", done: false }],
  });

  const [text, setText] = useState();

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() =>
          dispatch({ type: "add", todo: { title: text, done: false } })
        }
      >
        Add todo
      </button>

      {state.todoList.map((todo, index) => {
        return (
          <div>
            <p>{todo.title}</p>
            {todo.done ? "Done" : "Not done"}
            <button onClick={() => dispatch({ type: "delete", index })}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
