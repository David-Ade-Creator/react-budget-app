import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'uuid/v4';

const initialExpenses = [
  {id:uuid(), charge:"rent", amount: 4000},
  {id:uuid(), charge:"wifi payment", amount: 1600},
  {id:uuid(), charge:"credit card bill", amount: 1300},
];

function App() {
  //***** state values *******

  //***** all expenses, add expenses *******
  const [expenses,setExpenses] = useState(initialExpenses);
  // single expenses
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  //Alert
  const [alert, setAlert] = useState({show:false})

  const [edit, setEdit] = useState(false);

  const [id,setId] = useState(0);


  //***** functionality *******
  const handleCharge = e => {
    setCharge(e.target.value)
  };

  const handleAmount = e => {
    setAmount(e.target.value)
  };
//handle Alert
const handleAlert = ({type,text}) =>{
  setAlert({show:true,type,text});
  setTimeout(() => {
    setAlert({show:false});
  }, 3000);
}
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !=='' && amount > 0) {
      if(edit){
        let tempExpenses = expenses.map(item =>{
          return item.id === id?{...item,charge,amount}:item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({type:"success",text:"item updated"});
      }else{
        const newExpense = {id:uuid(),charge,amount};
        setExpenses([...expenses, newExpense]);
        handleAlert({type:'success',text:"Item added"});
      }
      setCharge('');
      setAmount('');
    }else{
      handleAlert({type:'danger', text:`charge can't be empty value and amount must be greater than zero`})
    }
  };
  //clear all items
  const clearItems = () =>{
    setExpenses([]);
    handleAlert({type:"danger",text:"All items deleted"})
  };
  //del single item
  const handleDelete = id =>{
    let tempExpenses = expenses.filter (item => item.id !==id);
    setExpenses(tempExpenses);
    handleAlert({type:"danger",text:"item deleted"});
  };
  //handle edit
  const handleEdit = id =>{
    let expense = expenses.find(item => item.id === id);
    let {charge,amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <div className="container App">
    <div>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
    </div>
    <h3>Budget Calculator</h3>
    <main className="primary-App">
    <ExpenseForm
    charge={charge}
    amount={amount}
    handleAmount={handleAmount}
    handleCharge={handleCharge}
    handleSubmit={handleSubmit}
    edit={edit}
    />
    <ExpenseList
    expenses={expenses}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
    clearItems={clearItems}
    />
    </main>
    <div><h5>Total spending : <span className="total">
      $ {expenses.reduce((acc,curr) => {
        return (acc += parseInt(curr.amount)) ;
      },0)}
    </span>
    </h5></div>
    </div>
  );
}

export default App;
