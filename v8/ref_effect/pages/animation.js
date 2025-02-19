// Animera html-element direkt istället för att använda reacts system
// kan vara snabbare.

import { useEffect, useRef } from "react";

export default function Animate() {
  const squareRef = useRef();
  const squarePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function loop() {
      const { x, y } = squarePos.current;

      const newX = x + 1;
      const newY = y + 1;

      squareRef.current.style.transform = `translate(${newX}px, ${newY}px)`;

      squarePos.current = { x: newX, y: newY };
      requestAnimationFrame(loop);
    }

    loop();
  }, []);

  return <div ref={squareRef} className="w-20 h-20 bg-red-500"></div>;
}
