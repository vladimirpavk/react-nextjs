import './NewExpense.css';

import ExpenseForm from './ExpenseForm/ExpenseForm.js';

const NewExpense = (props)=>{

    const onFormSubmit = (event)=>{
        console.log(event);
        props.onValueChanged({
            ...event,
            id: Math.random().toString()
        });
    }

    return(
        <div className="new-expense">
            <ExpenseForm onFormSubmit={onFormSubmit}></ExpenseForm>
        </div>
    )
}

export default NewExpense;