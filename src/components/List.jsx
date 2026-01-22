const List = ({ item, deleteItem, done }) => {
  const { product, quantity, packed } = item;
  return (
    <li className="list-wrapper">
      <span>{quantity}</span>
      <p className={packed ? "packed" : "unpacked"}>{product}</p>
      <div>
        <button onClick={() => done(item.id)} className="done-btn">
          Done
        </button>
        <button onClick={() => deleteItem(item.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;