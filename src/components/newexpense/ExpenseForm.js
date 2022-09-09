import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm=(props)=>{
  const[enteredTitle,setTitle]=useState('');
  const[enteredAmount,setAmount]=useState('');
  const[enteredDate,setDate]=useState('');
  const titleHandler=(event)=>{
    setTitle(event.target.value);
  }
  const amountHandler=(event)=>{
    setAmount(event.target.value);
  }
  const dateHandler=(event)=>{
    setDate(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseobj={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    };
    // console.log(expenseobj);
    props.onSave(expenseobj);
    setTitle('');
    setAmount('');
    setDate('');
  }


return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input type="text" onChange={titleHandler} value={enteredTitle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountHandler} value={enteredAmount} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" step="2020-01-03" onChange={dateHandler} value={enteredDate}/>
          </div>
          
        </div>
        <div className="new-expense_actions">
        <button type="submit">Add Expense</button>

        </div>
      </form>
    );

}
export default ExpenseForm;