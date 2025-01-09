import Item from "./Item";

const List = (props) => (
  <ul>
    {props.list.map((item) => {
      return <Item key={item.objectId} item={item} />;
    })}
  </ul>
);

export default List;
