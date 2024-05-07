import React from "react";

function Withdraw({ contract, accounts }) {
  const handleWithdraw = async () => {
    await contract.methods.withdraw().send({ from: accounts[0] });
    alert("Funds withdrawn successfully!");
  };

  return (
    <div>
      <h2>Withdraw Funds</h2>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default Withdraw;
