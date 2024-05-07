import React, { useState } from "react";

function UpdateShipment({ contract, accounts }) {
  const [orderId, setOrderId] = useState(0);
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await contract.methods.updateShipment(orderId, location, status).send({ from: accounts[0] });
    alert("Shipment updated successfully!");
    setOrderId(0);
    setLocation("");
    setStatus(0);
  };

  return (
    <div>
      <h2>Update Shipment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input type="number" value={orderId} onChange={(e) => setOrderId(parseInt(e.target.value))} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(parseInt(e.target.value))} required>
            <option value={0}>In Warehouse</option>
            <option value={1}>In Transit</option>
            <option value={2}>Delivered</option>
          </select>
        </label>
        <button type="submit">Update Shipment</button>
      </form>
    </div>
  );
}

export default UpdateShipment;
