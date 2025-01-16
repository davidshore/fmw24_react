import { useState } from "react";
export default function AddFruit(props) {
  const { handleAddFruit } = props;
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <h2>Add fruit</h2>
      <input
        value={fruit}
        type="text"
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddFruit(fruit);

          setFruit("");
        }}
      >
        Lägg till frukt
      </button>
      adding: {fruit}
    </div>
  );
}
