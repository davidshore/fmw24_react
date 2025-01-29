// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data.slice(0, 5));
  }

  useEffect(() => {
    getPosts();
  }, []);

  // function handleLog(id) {
  //   console.log("postens id: ", id);
  // }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <button onClick={() => console.log("postens id: ", post.id)}>
              Log id
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
