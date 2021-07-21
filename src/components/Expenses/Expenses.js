import React, { useState } from 'react';

import './Expenses.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.js';

const Expenses = (props)=>{

    const [expenseFilter, setExpenseFilter] = useState('2020');
    const [expenseList, setExpenseList] = useState(props.list);

    const filterChanged = (eventData)=>{
        console.log(eventData);
        setExpenseFilter(eventData);
   /*      console.log(eventData);
        setExpenseFilter(eventData);
        
        const filteredList = expenseList.filter(
            (element)=>element.year === expenseFilter
        );
        
        setExpenseList(filteredList);
        
        console.log(filteredList); */

        const filteredList = expenseList.filter(
            (element)=>{             
                console.log('element', element.date.getFullYear(), 'expenseFilter', eventData);
                console.log(element.date.getFullYear().toString() === expenseFilter.toString());
                return element.date.getFullYear().toString() === expenseFilter.toString();
            }
        );
        console.log(filteredList);
    }

    const expensesList = props.list.map( 
        (expense, index)=>{
            return(
                <ExpenseItem          
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            )
      });

    return(
        <div className="expenses">
            <ExpenseFilter onFilterChanged={filterChanged}/>
            {expensesList};
        </div>
    );
}

export default Expenses;