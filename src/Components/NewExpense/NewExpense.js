import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isVisible, setVisible] = useState(false);

  const formData = (formInfo) => {
    const info = {
      ...formInfo,
      id: Math.random().toString(),
    };
    props.newItem(info);
  };

  const cancelHandler = () => {
    setVisible(false);
  };

  const visibleHandler = () => {
    setVisible(true);
  };

  return (
    <div className="new-expense">
      {!isVisible && <button onClick={visibleHandler}>Add Expense</button>}

      {isVisible && (
        <NewExpenseForm NewFormData={formData} onCancel={cancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
