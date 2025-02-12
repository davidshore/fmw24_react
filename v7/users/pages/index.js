import { useEffect, useState } from "react";

// CSR - Client Side Rendering
export default function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p>
          <a href={"/users/" + user.id}>{user.name}</a>
        </p>
      ))}
    </div>
  );
}
