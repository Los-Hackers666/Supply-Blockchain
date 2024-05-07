import React, { useState } from "react";

function PlaceOrder({ contract, accounts }) {
  const [productIds, setProductIds] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const totalCost = await contract.methods.placeOrder(productIds, quantities).call({ from: accounts[0] });
    await contract.methods.placeOrder(productIds, quantities).send({ from: accounts[0], value: totalCost });
    alert("Order placed successfully!");
    setProductIds([]);
    setQuantities([]);
  };

  const addProduct = () => {
    setProductIds([...productIds, 0]);
    setQuantities([...quantities, 0]);
  };

  const updateProductId = (index, value) => {
    const newProductIds = [...productIds];
    newProductIds[index] = value;
    setProductIds(newProductIds);
  };

  const updateQuantity = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        {productIds.map((productId, index) => (
          <div key={index}>
            <label>
              Product ID:
              <input
                type="number"
                value={productId}
                onChange={(e) => updateProductId(index, parseInt(e.target.value))}
                required
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                value={quantities[index]}
                onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addProduct}>
          Add Product
        </button>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default PlaceOrder;
