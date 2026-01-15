const List = ({ item }) => {
  return (
    <li className="list-wrapper">
      <span>{item.quantity}</span>

      <p> {item.product}</p>
      <div>
        <button className="done-btn">Done</button>
        <button className="delete-btn">Delete</button>
      </div>
    </li>
  );
};

export default List;
// const List = ({ item, handleDelete, handleDone }) => {
//   const { product, quantity, packed, id } = item;
//   return (
//     <li className="list-wrapper" key={item.id}>
//       <span>{quantity}</span>
//       <p style={packed ? { textDecoration: "line-through" } : {}}>{product} </p>
//       <div>
//         <button onClick={() => handleDone(id)} className="doneBtn">
//           Done
//         </button>
//         <button onClick={() => handleDelete(id)} className="delBtn">
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// };

// export default List;
