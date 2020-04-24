import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

import {MdDelete} from 'react-icons/md';

const ExpenseList = ({
  expenses,
  handleEdit,
  handleDelete,
  clearItems
}) => {
  return(
    <div className="row list-container">
       <ul className="list col-lg-12">
       {expenses.map((expense) =>{
        return <ExpenseItem key={expense.id} expense={expense}
        handleDelete={handleDelete} handleEdit={handleEdit} />;
       })}
       </ul>
      <div className="clear">{expenses.length > 0 && <button className="btn" onClick={clearItems}>
       Clear Expenses <MdDelete className="btn-icon"/></button>}</div>
     </div>
)
};

export default ExpenseList;
