import React, { useState, useEffect } from 'react';

import './Expenses.css';

import ExpenseList from '../ExpenseList/ExpenseList.js';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.js';
import ExpenseChart from '../ExpenseChart/ExpenseChart.js';

const Expenses = (props)=>{
    
    const [expenseList, setExpenseList] = useState(props.list);
    const [filteredList, setFilteredList] = useState([]);
    const [expenseFilter, setExpenseFilter] = useState('2021');

    useEffect(()=>{       
        const templateList = expenseList.filter(
            (element)=>{
                return element.date.getFullYear().toString() === expenseFilter.toString();
            }
        );
        setFilteredList(templateList);
    }, [expenseFilter, expenseList]);

    useEffect(() => {       
        setExpenseList(props.list);
    }, [props.list])

    const filterChanged = (eventData)=>{        
        setExpenseFilter(eventData);          
    }
    
    return(
        <div className="expenses">
            <ExpenseFilter onFilterChanged={filterChanged}/>
            <ExpenseList list={filteredList}></ExpenseList> 
            <ExpenseChart expenses={filteredList}></ExpenseChart>
        </div>
    );
}

export default Expenses;