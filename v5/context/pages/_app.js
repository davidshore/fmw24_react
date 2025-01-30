import "@/styles/globals.css";

import CountProvider from "@/context/countContext";
import TodoProvider from "@/context/todoContext";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <CountProvider>
        <Component {...pageProps} />
      </CountProvider>
    </TodoProvider>
  );
}
