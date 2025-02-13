import Link from "next/link";

// Hämta nyhetsdata på backend och gör statisk sida

// ISR - Icremental Static Regeneration = skapa en ny html-sida vid ett visst intervall t.ex. 60 sek

export async function getStaticProps() {
  const result = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.DIN_API_NYCKEL}&q=pizza`
  );
  const data = await result.json();

  return {
    props: { news: data.results, tid: Date.now() },
    revalidate: 60, //Cache:ar i 60 sekunder
  };
}

export default function Home({ news, tid }) {
  return (
    <div>
      <h1>Tidstämpel just nu: {tid}</h1>
      {news.map((article) => {
        return (
          <div>
            <h2>
              <Link href={`/article/${article.article_id}`}>
                {article.title}
              </Link>
            </h2>
            <img width={800} src={article.image_url} />
          </div>
        );
      })}
    </div>
  );
}
