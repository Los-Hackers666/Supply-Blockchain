import React, { useState } from "react";

function ProductDetails({ contract }) {
  const [productId, setProductId] = useState(0);
  const [product, setProduct] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await contract.methods.listProduct(productId).call();
    setProduct({
      name: result[0],
      price: result[1],
      stock: result[2],
    });
  };

  return (
    <div>
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input type="number" value={productId} onChange={(e) => setProductId(parseInt(e.target.value))} required />
        </label>
        <button type="submit">Get Details</button>
      </form>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
