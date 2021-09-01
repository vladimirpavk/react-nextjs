import React, { useState, useEffect } from 'react';

import './Expenses.css';

import ExpenseList from '../ExpenseList/ExpenseList.js';
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

    

    return(
        <div className="expenses">
            <ExpenseFilter onFilterChanged={filterChanged}/>
            <ExpenseList list={filteredList}></ExpenseList>       
        </div>
    );
}

export default Expenses;