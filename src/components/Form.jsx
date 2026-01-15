const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="add-items" action="">
      <select name="" id="">
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1}>{i + 1}</option>
        ))}
      </select>
      <input type="text" placeholder="Enter Element to Add" />
      <button>Add</button>
    </form>
  );
};

export default Form; // import React from "react";

// const Form = ({ items, handleAddItems }) => {
//   const [product, setProduct] = React.useState("");
//   const [quantity, setQuantity] = React.useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (product) {
//       const newTodo = {
//         id: Date.now(),
//         packed: false,
//         quantity,
//         product,
//       };
//       console.log(newTodo);
//       handleAddItems(newTodo);
//       setProduct("");
//       setQuantity(1);
//     }
//     console.log(items);
//   };
//   return (
//     <form onSubmit={handleSubmit} className="addItems">
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => (
//           <option value={i + 1} key={i + 1}>
//             {i + 1}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Enter an Item to Add"
//         value={product}
//         onChange={(e) => setProduct(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// };

// export default Form;
