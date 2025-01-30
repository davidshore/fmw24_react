import { TodoContext } from "@/context/todoContext";
import { useContext, useState } from "react";
import Link from "next/link";

export default function AddTodos() {
  const { addTodo } = useContext(TodoContext);

  const [text, setText] = useState("");

  return (
    <div>
      <nav className="flex gap-2">
        <Link href={"/todoList"}>Todolist</Link>
        <Link href={"/addTodos"}>Add</Link>
      </nav>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={() => addTodo(text)}>Add</button>
    </div>
  );
}
