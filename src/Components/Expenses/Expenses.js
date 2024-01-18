import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter'
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHundler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="wrapper">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHundler}
      />
      {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </div>
  );
};

export default Expenses;
