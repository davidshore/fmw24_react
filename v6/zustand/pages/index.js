import { useUserStore } from "@/store";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const loggedIn = useUserStore((state) => state.loggedIn);
  const username = useUserStore((state) => state.username);

  const [inputUsername, setInputUsername] = useState("");

  if (loggedIn) {
    return (
      <div>
        <Link href="/profile">Profile</Link>
        <h2>You are logged in</h2>
        <p>Your username: {username}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        type="text"
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button onClick={() => login(inputUsername)}>Log in</button>
    </div>
  );
}
