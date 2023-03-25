import React from 'react';
import './Newexp.css'
import ExpenseForm from './ExpenseForm'


const Newexpense=(props)=>{
const Saveda=(entered)=>{
    const expenseData={
        ...entered,
        id:Math.random().toString()

    };
    // console.log(expenseData)
    props.onAdd(expenseData);
};
    return <div className='expense'>
        <ExpenseForm onSave={Saveda}/>
    </div>

};
export default Newexpense;