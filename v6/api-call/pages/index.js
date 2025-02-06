import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState();

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (!users) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {users &&
        users.map((user) => {
          return <p>{user.name}</p>;
        })}
    </div>
  );
}
