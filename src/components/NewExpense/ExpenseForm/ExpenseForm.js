import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    const formSubmitted = (formEvent)=>{
        formEvent.preventDefault();             

        props.onFormSubmit(userInput);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    }

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const onTitleChanged = (event)=>{
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    const onAmountChanged = (event)=>{
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    }

    const onDateChanged = (event)=>{
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    return(
        <form onSubmit={(eventData=>formSubmitted(eventData))}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={(data)=>onTitleChanged(data)} value={userInput.enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" max="50" onChange={(data)=>onAmountChanged(data)} value={userInput.enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={(data)=>onDateChanged(data)} value={userInput.enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onResetClicked}>Reset</button>
                <button>Add Expense</button>
            </div>
        </form>    
    )
}

export default ExpenseForm;
