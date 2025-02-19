import { useEffect, useRef } from "react";

export default function InputRef() {
  const inputRef = useRef();

  useEffect(() => {
    // Sätt focus funkar på samma sätt som vanilla js
    inputRef.current.focus();
    console.log("html element: ", inputRef.current);
  }, []);

  return <input ref={inputRef} type="text" />;
}
