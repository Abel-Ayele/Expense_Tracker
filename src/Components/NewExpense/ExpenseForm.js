import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const titleChangeHundler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHundler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHundler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHundler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date (enteredDate)
    };
    props.onAddExpense(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHundler}>
      <div className="expense__controls">
        <div className="expense__control">
          <label>Description</label>
          <input
            type="text"
            onChange={titleChangeHundler}
            value={enteredTitle}
          />
        </div>
        <div className="expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHundler}
            value={enteredAmount}
          />
        </div>
        <div className="expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHundler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
