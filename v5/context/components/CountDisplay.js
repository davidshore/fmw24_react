import { CountContext } from "@/context/countContext";
import { useContext } from "react";

export default function CountDisplay() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      {count} <button onClick={() => setCount(count + 1)}>Öka</button>{" "}
    </div>
  );
}
