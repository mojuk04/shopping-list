import Form from "./Form";
import List from "./List";
const Main = ({ items, addItem, deleteItem, done }) => {
  return (
    <main>
      <Form items={items} addItem={addItem} />
      <ul>
        {items.map((item) => (
          <List item={item} key={item.id} deleteItem={deleteItem} done={done} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
