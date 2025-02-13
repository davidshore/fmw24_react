// För att skapa alla artikel-sidor (statiskt) så måste
// next veta alla url:er som är möjliga och därmed alla id:en för alla artiklar

// hämta all data som behövs för att skapa url:er
export async function getStaticPaths() {
  const result = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.DIN_API_NYCKEL}&q=pizza`
  );
  const data = await result.json();

  const articles = data.results;

  // en array med all data som behövs för att skapa url:er
  const paths = articles.map((article) => ({
    params: { articleId: article.article_id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.DIN_API_NYCKEL}&q=pizza`
  );
  const data = await result.json();

  const articles = data.results;

  const article = articles.find(
    (article) => article.article_id == params.articleId
  );

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
}

export default function Article({ article }) {
  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <img width={1200} src={article.image_url} />
          <p>{article.description}</p>
        </>
      )}
    </div>
  );
}
