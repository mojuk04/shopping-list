import { useState } from "react";

const Form = ({ addItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      setProduct("");
      setQuantity(1);
      addItem(newTodo);
    }
  };
  return (
    <form className="add-items" onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1}> {i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter an element to add"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
