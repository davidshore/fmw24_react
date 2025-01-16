export default function List(props) {
  const { list } = props;

  return (
    <div>
      <h2>List</h2>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
