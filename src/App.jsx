import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const expenseData = [
  {
    id: 1,
    title: "Books",
    price: 941,
    date: new Date(2020, 7, 14),
  },
  { id: 2, title: "House rent", price: 1000, date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: "Car Insurance",
    price: 2949,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "light bill",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setNewData] = useState(expenseData);

  const newData = (info) => {
    setNewData((prevData) => {
      return [info, ...prevData];
    });
  };

  return (
    <div>
      <NewExpense newItem={newData} />
      <Expenses item={expense} />
    </div>
  );
};

export default App;
