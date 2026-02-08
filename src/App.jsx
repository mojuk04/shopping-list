import { useState } from "react";
import "./App.css";
import "./styles/shopping.css";
import Header from "./components/shopping-app/Header";
import Main from "./components/shopping-app/Main";
import Language from "./components/language-app/Language";
import "./styles/language.css";

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
      <section className="shopping-app">
        <Header />
        <Main
          items={items}
          addItem={addItem}
          deleteItem={deleteItem}
          done={done}
        />
      </section>
      <section className="language-app">
        <Language />
      </section>
    </>
  );
};

export default App;
