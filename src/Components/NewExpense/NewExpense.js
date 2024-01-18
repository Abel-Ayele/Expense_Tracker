import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHundler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
  };
  return (
    <div className="new_expense">
      <ExpenseForm onAddExpense={addExpenseHundler} />
    </div>
  );
};

export default NewExpense;
