import { ThemeContext } from "@/themeContext";
import { useContext } from "react";

export default function Button() {
  const { dark, setDark } = useContext(ThemeContext);

  let buttonStyles = "bg-white text-black border border-black";

  if (dark) {
    buttonStyles = "bg-black text-white border border-black";
  }

  return (
    <button className={buttonStyles} onClick={() => setDark(!dark)}>
      My button
    </button>
  );
}
