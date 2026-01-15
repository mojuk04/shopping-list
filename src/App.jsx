import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;

// import "./App.css";
// import { useState } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// function App() {
//   const [items, setItems] = useState([]);

//   const handleAddItems = (item) => {
//     setItems((items) => [...items, item]);
//   };
//   const handleDelete = (id) => {
//     setItems((items) => items.filter((item) => item.id !== id));
//   };

//   const handleDone = (id) => {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   };

//   return (
//     <>
//       <Header />
//       <Main
//         items={items}
//         handleAddItems={handleAddItems}
//         handleDelete={handleDelete}
//         handleDone={handleDone}
//       />
//       <Footer />
//     </>
//   );
// }

// export default App;
