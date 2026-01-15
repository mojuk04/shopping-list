import Form from "./Form";
import List from "./List";
import shoppingList from "../data/data";
const Main = () => {
  return (
    <main>
      <Form />
      <ul>
        {shoppingList.map((item) => (
          <List item={item} key={item.id} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
// import List from "./List";
// import Form from "./Form";

// const Main = ({ items, handleAddItems, handleDelete, handleDone }) => {
//   return (
//     <main>
//       <Form handleAddItems={handleAddItems} />
//       <ul>
//         {items.map((item) => (
//           <List
//             item={item}
//             key={item.id}
//             handleDelete={handleDelete}
//             handleDone={handleDone}
//           />
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default Main;
