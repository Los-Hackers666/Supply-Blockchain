import React, { useState } from "react";

function OrderStatus({ contract }) {
  const [orderId, setOrderId] = useState(0);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await contract.methods.shipments(orderId).call();
    const statusCode = parseInt(result[2]);
    let statusText = "";
    switch (statusCode) {
      case 0:
        statusText = "In Warehouse";
        break;
      case 1:
        statusText = "In Transit";
        break;
      case 2:
        statusText = "Delivered";
        break;
      default:
        statusText = "Unknown";
    }
    setStatus(statusText);
  };

  return (
    <div>
      <h2>Order Status</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input type="number" value={orderId} onChange={(e) => setOrderId(parseInt(e.target.value))} required />
        </label>
        <button type="submit">Get Status</button>
      </form>
      {status && <p>Status: {status}</p>}
    </div>
  );
}

export default OrderStatus;
