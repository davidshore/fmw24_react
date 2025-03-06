"use client";

import { useState } from "react";

export default function Search({ news }) {
  const [search, setSeach] = useState("");

  const filteredNews = news.filter(
    (article) =>
      search == "" || article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={(e) => setSeach(e.target.value)} />
      {filteredNews.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.image_url} />
          </div>
        );
      })}
    </div>
  );
}
