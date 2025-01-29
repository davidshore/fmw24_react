import { useState } from "react";

export default function Panel({ title, children, collapsible }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>{title}</h2>
      {collapsible && (
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      )}
      {show && <p>{children}</p>}
    </div>
  );
}
