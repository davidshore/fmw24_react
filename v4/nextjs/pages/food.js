import { useState } from "react";

const startPrompt = "Ge mig ett recept på maträtter från detta land:  ";
const slutPrompt =
  " Ge mig svaret som en json med följande data namn, ingredienser, tid och steg";

export default function Food() {
  const [answer, setAnswer] = useState("");

  async function sendPrompt(country) {
    const prompt = startPrompt + country + slutPrompt;

    const response = await fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();

    setAnswer(data.answer);
  }

  return (
    <div>
      <h2>Välj land</h2>

      <select onChange={(e) => sendPrompt(e.target.value)}>
        <option value={"Sverige"}>Sverige</option>
        <option value={"England"}>England</option>
        <option value={"Indien"}>Indien</option>
      </select>

      <p>{answer}</p>
    </div>
  );
}
