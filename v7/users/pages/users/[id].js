import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// CSR - Client Side Rendering
export default function User() {
  const router = useRouter();
  const id = router.query.id;

  const [user, setUser] = useState();

  async function getUser(userId) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    const data = await response.json();

    setUser(data);
  }

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  if (user == null) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}
