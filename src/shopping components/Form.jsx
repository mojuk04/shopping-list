import { useState } from "react";

const Form = ({ addItem }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      addItem(newTodo);
    }
    setProduct("");
    setQuantity(1);
  };
  return (
    <form onSubmit={handleSubmit} className="add-items">
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {" "}
            {i + 1}
          </option>
        ))}
      </select>
      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        type="text"
        placeholder="Enter an item to add"
      />
      <button>Add Item</button>
    </form>
  );
};

export default Form;
