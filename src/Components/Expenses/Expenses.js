import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../common/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterYearHandler}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );

  /* <Card className="expenses">
      <ExpenseItem
        title={props.item[0].title}
        date={props.item[0].date}
        price={props.item[0].price}
      />
      <ExpenseItem
        title={props.item[1].title}
        date={props.item[1].date}
        price={props.item[1].price}
      />
      <ExpenseItem
        title={props.item[2].title}
        date={props.item[2].date}
        price={props.item[2].price}
      />
      <ExpenseItem
        title={props.item[3].title}
        date={props.item[3].date}
        price={props.item[3].price}
      />
    </Card> */
};

export default Expenses;
