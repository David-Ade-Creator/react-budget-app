import React from "react";
import './ExpenseItem.css';

import {MdEdit, MdDelete} from 'react-icons/md';

const ExpenseItem = ({
  expense:{id,charge,amount},
  handleEdit,
  handleDelete
}) => {

  return(
    <li className="row item">
     <div className="info">
     <span className="expense">{charge}</span>
     <span className="amount">${amount}</span>
     </div>
     <div className="buttoncon">
     <button className="btn edit" arial-label="edit button" onClick={() => handleEdit(id)}><MdEdit/></button>
     <button className="btn clear-btn" arial-label="edit button" onClick={() => handleDelete(id)}><MdDelete/></button>
     </div>
    </li>
)
};

export default ExpenseItem;
