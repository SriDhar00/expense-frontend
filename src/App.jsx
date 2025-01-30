import { useState } from "react";
import TransactionList from "./components/TransactionList.jsx";
import NewTxnForm from "./components/NewTxnForm.jsx";
import IncExpContainer from "./components/IncExpContainer.jsx";
const App=()=>{
  const [transactions, setTransactions] = useState([
    { title: "Salary", amount: 5000 },
    { title: "Rent", amount: -1000 },
    { title: "Grocery", amount: -200 },
    { title: "Utility", amount: -300 },
  ]);
const addToList = (title, amount) => {
  setTransactions([...transactions, { title:title, amount:amount }]);}

const removeFromList = (index) => {
  const newTransactions = transactions.filter((txn, i) => i !== index);
  setTransactions(newTransactions);
}

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <IncExpContainer transactions={transactions}/>
      <TransactionList transactions={transactions} removeFromList={removeFromList}/>
      <NewTxnForm addToList={addToList}/>
    
    </div>
  )
}
export default App;
