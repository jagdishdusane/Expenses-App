import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [price, setAmount] = useState();

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      title: title,
      price: price,
      date: date,
    };
    props.NewFormData(inputData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={title} required />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateHandler}
            required
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
