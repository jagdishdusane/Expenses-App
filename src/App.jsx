import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const Expensedata = [
  {
    id: 1,
    title: "House Rent",
    date: new Date(2021, 7, 10),
    price: 6000,
  },
  {
    id: 2,
    title: "Car Incuranc",
    date: new Date(2020, 6, 6),
    price: 1000,
  },
  {
    id: 3,
    title: "meal",
    date: new Date(2021, 3, 25),
    price: 3000,
  },
  {
    id: 4,
    title: "Light Bill",
    date: new Date(2021, 2, 14),
    price: 500,
  },
];

const App = () => {
  const [expense, setNewData] = useState(Expensedata);

  const newData = (info) => {
    setNewData((prevData) => {
      return [info, ...prevData];
    });
    console.log(info);
    console.log("show in app.js file");
  };

  return (
    <div>
      <NewExpense newItem={newData} />
      <Expenses item={expense} />
    </div>
  );
};

export default App;
