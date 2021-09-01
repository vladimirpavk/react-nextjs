import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem.js';

import './ExpenseList.css';

const ExpenseList = (props)=>{
    //props.list
    if(props.list.length === 0) return (<h2 className="no_data">No expenses to show.</h2>)

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
        <div className="expensesList">
            {expensesList}
        </div>        
    );
}

export default ExpenseList;