// import React from 'react';

import Expendi from './Expendi';
// import Card from '../UI/Card';
// // import './Expenses.css';

// const Expenses = (props) => {
//   return (
//     <Card className="expenses">
//     {props.items.map(expense=>
//     (
//       <Expendi 
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}

//     />))}
//     {/* {}
//       <Expendi
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <Expendi
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <Expendi
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <Expendi
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       /> */}
//     </Card>
//   );
// }

// export default Expenses;
import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expendi.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };
  const filtered=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  console.log(filteredYear,"hgv")
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filtered.length===0 ? (<p>no expenses</p>):
        (
        filtered.map((expense) => (
          <Expendi
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;