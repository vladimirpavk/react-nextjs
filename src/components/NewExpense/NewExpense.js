import React, { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm/ExpenseForm.js';

const NewExpense = (props)=>{

    const [isFormShown, setIsFormShown] = useState(false);

    const onFormSubmit = (event)=>{
        props.onValueChanged({
            ...event,
            id: Math.random().toString()
        });
    }

    const showForm = ()=>{
        setIsFormShown(
            (prevState)=>!prevState
        )
    }

    return(
        <div className="new-expense">
            {
                isFormShown ? <ExpenseForm onFormSubmit={onFormSubmit} onResetClicked={showForm}></ExpenseForm> : <button onClick={showForm}>Add new expense</button>
            }
        </div>
    )
}

export default NewExpense;