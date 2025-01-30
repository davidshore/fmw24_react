import { TodoContext } from "@/context/todoContext";
import { useContext } from "react";
import Link from "next/link";

export default function TodoList() {
  const { todoList, setTodoList } = useContext(TodoContext);

  return (
    <div>
      <nav className="flex gap-2">
        <Link href={"/todoList"}>Todolist</Link>
        <Link href={"/addTodos"}>Add</Link>
      </nav>

      {todoList.map((todo) => {
        return (
          <div>
            <div>{todo.title}</div>
          </div>
        );
      })}
    </div>
  );
}
