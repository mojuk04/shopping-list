import Form from "./Form";
import List from "./List";

const Main = ({ items, addItem, handleDelete, handleDone }) => {
  return (
    <main>
      <Form addItem={addItem} items={items} />
      <ul>
        {items.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;
