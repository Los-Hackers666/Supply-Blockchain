import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import SupplyChainContract from "./contracts/SupplyChain.json";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import PlaceOrder from "./components/PlaceOrder";
import UpdateShipment from "./components/UpdateShipment";
import DeliverOrder from "./components/DeliverOrder";
import SetAuthorization from "./components/SetAuthorization";
import Withdraw from "./components/Withdraw";
import OrderStatus from "./components/OrderStatus";

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SupplyChainContract.networks[networkId];
        const instance = new web3.eth.Contract(
          SupplyChainContract.abi,
          deployedNetwork && deployedNetwork.address
        );

        setWeb3(web3);
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    };

    initWeb3();
  }, []);

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }

  return (
    <div className="App">
      <h1>Supply Chain Management</h1>
      <AddProduct contract={contract} accounts={accounts} />
      <ProductDetails contract={contract} web3={web3} />
      <PlaceOrder contract={contract} accounts={accounts} />
      <UpdateShipment contract={contract} accounts={accounts} />
      <DeliverOrder contract={contract} accounts={accounts} />
      <SetAuthorization contract={contract} accounts={accounts} />
      <Withdraw contract={contract} accounts={accounts} />
      <OrderStatus contract={contract} />
    </div>
  );
}
export default App;
