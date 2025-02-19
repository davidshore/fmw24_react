import { useState, useRef } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const refCount = useRef(0);

  let myVar = 0;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>klicka</button>

      <button
        onClick={() => {
          refCount.current = refCount.current + 1;
        }}
      >
        klicka ref
      </button>

      <button
        onClick={() => {
          myVar += 1;
        }}
      >
        klicka myVar
      </button>

      <p>Vanlig state count{count}</p>
      <p>Ref count {refCount.current}</p>
      <p>My var count {myVar}</p>
    </div>
  );
}
