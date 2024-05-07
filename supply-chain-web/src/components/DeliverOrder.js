import React, { useState } from "react";

function DeliverOrder({ contract, accounts }) {
  const [orderId, setOrderId] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await contract.methods.deliverOrder(orderId).send({ from: accounts[0] });
    alert("Order delivered successfully!");
    setOrderId(0);
  };

  return (
    <div>
      <h2>Deliver Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input type="number" value={orderId} onChange={(e) => setOrderId(parseInt(e.target.value))} required />
        </label>
        <button type="submit">Deliver Order</button>
      </form>
    </div>
  );
}

export default DeliverOrder;
