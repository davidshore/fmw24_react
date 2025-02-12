// SSR - Server Side Rendering
export async function getServerSideProps() {
  // Hämta data här
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { users: data },
  };
}

// All kod körs på servern och
// det som returneras från komponenten skickas till browsern
export default function SSRUsers({ users }) {
  return (
    <div>
      {users.map((user) => (
        <p>
          <a href={"/ssr-users/" + user.id}>{user.name}</a>
        </p>
      ))}
    </div>
  );
}
