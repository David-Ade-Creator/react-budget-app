import React from "react";
import './ExpenseForm.css';
import {MdSend} from 'react-icons/md';

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return<form className="container" onSubmit={handleSubmit}>
  <div className="row form-center">
   <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 form-group">
   <input
   type="text"
   className="form-control"
   id="charge"
   name="charge"
   value={charge}
   onChange={handleCharge}
   placeholder="Charge"
   />
   </div>
   <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
   <input
   type="number"
   className="form-control"
   id="amount"
   name="amount"
   value={amount}
   onChange={handleAmount}
   placeholder="Amount e.g. 100"
   />
   </div>
   <div className="btnclass">
   <button type="submit" className="btn">{edit?'edit':'submit'}<MdSend className="btn-icon" /></button>
   </div>
  </div>
  </form>;
};

export default ExpenseForm;
