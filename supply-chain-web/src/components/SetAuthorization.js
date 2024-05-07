import React, { useState } from "react";

function SetAuthorization({ contract, accounts }) {
  const [address, setAddress] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await contract.methods.setAuthorization(address, authorized).send({ from: accounts[0] });
    alert("Authorization updated successfully!");
    setAddress("");
    setAuthorized(false);
  };

  return (
    <div>
      <h2>Set Authorization</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Authorized:
          <input type="checkbox" checked={authorized} onChange={(e) => setAuthorized(e.target.checked)} />
        </label>
        <button type="submit">Set Authorization</button>
      </form>
    </div>
  );
}

export default SetAuthorization;
