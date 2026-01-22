import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => setItems((items) => [...items, newItem]);

  const deleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));

  const done = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <>
      <Header />
      <Main
        items={items}
        addItem={addItem}
        deleteItem={deleteItem}
        done={done}
      />
    </>
  );
};

export default App;
