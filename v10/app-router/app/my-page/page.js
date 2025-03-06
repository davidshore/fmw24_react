"use client";

import { useState } from "react";

export default function MyPage() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h2>My page</h2>
      {count}
    </div>
  );
}
