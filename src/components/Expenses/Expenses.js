import React, { useState, useEffect } from 'react';

import './Expenses.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.js';

const Expenses = (props)=>{
    
    const [expenseList, setExpenseList] = useState(props.list);
    const [filteredList, setFilteredList] = useState([]);
    const [expenseFilter, setExpenseFilter] = useState('2022');

    useEffect(()=>{
        const templateList = expenseList.filter(
            (element)=>{
                return element.date.getFullYear().toString() === expenseFilter.toString();
            }
        );
        setFilteredList(templateList);
    }, [expenseFilter]);

    const filterChanged = (eventData)=>{        
        setExpenseFilter(eventData);          
    }

    const expensesList = filteredList.map( 
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
            {
                expensesList.length === 0 ? <p>No expenses found.</p> : expensesList
            }            
        </div>
    );
}

export default Expenses;