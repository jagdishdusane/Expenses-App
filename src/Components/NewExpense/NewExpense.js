import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const formData = (formInfo) => {
    const info = {
      ...formInfo,
      id: Math.random().toString(),
    };
    props.newItem(info);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm NewFormData={formData} />
    </div>
  );
};

export default NewExpense;
