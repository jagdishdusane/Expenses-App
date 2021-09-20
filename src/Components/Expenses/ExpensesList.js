import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../Expenses/ExpensesList.css";

const ExpensesList = (props) => {
  // let expenseContent = <p>No expens item</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
