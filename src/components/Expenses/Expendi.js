import './Expendi.css'
import React,{useState} from 'react';
import Expendate from './Expendate';
import Card from '../UI/Card';
function Expendi(props){
    // const expensedate=new Date(2021,2,24);
    // const expensetitle='car';
    // const expenseamount=455;
    const [title,setTitle]=useState(props.title);
    
   const clickHandler=()=>{
    setTitle('Updated')
    

   } 
 

    return(
        <Card className='expense-item'>
        <Expendate date={props.date} />
        <div className='expense-item__description' >
             <h2>
                {title}
             </h2>
             <div className='expense-item__price'>{props.amount}</div>
         </div>
         <button onClick={clickHandler}>change title</button>
         </Card>
);}
export default Expendi;