import React, { useState } from "react";
import web3 from "web3";

function ProductDetails({ contract }) {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await contract.methods.listProduct(productId).call();
      setProduct({
        name: result[0],
        price: result[1],
        stock: result[2],
      });
    } catch (error) {
      console.error(error);
      alert("Failed to get product details. Check console for details.");
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="number"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Get Details</button>
      </form>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {web3.utils.fromWei(product.price, "ether")} ETH</p>
          <p>Stock: {product.stock}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
