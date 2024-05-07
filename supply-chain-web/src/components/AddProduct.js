import React, { useState } from "react";

function AddProduct({ contract, accounts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await contract.methods.addProduct(name, price, stock).send({ from: accounts[0] });
    alert("Product added successfully!");
    setName("");
    setPrice(0);
    setStock(0);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} required />
        </label>
        <label>
          Stock:
          <input type="number" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
