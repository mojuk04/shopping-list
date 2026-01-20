const List = ({ item, handleDelete, handleDone }) => {
  const { quantity, product } = item;
  return (
    <li className="list-wrapper">
      <span>{quantity}</span>
      <p className={item.packed ? "packed" : null}>{product}</p>
      <div>
        <button onClick={() => handleDone(item.id)} className="done-btn">
          Done
        </button>
        <button onClick={() => handleDelete(item.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
