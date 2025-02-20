import { useCount } from "@/hooks/useCount";
import { useWindowSize } from "@/hooks/useWindowSize";

function ComponentA() {
  const { count, increment } = useCount();

  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>ComponentA</h1>
      <button onClick={increment}>öka</button>
      count is: {count}
      <br />
      widow width is: {width}
      <br />
      widow height is: {height}
    </div>
  );
}

function ComponentB() {
  const { count, increment } = useCount();

  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>ComponentB</h1>
      count is: {count}
      <br />
      widow width is: {width}
      <br />
      widow height is: {height}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}
