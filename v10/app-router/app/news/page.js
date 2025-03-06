import Search from "./search";
const DIN_API_NYCKEL = process.env.DIN_API_NYCKEL;

export default async function News() {
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`
  );

  const data = await response.json();

  const news = data.results;

  return (
    <div>
      <h2>Server component</h2>

      <Search news={news} />
    </div>
  );
}
