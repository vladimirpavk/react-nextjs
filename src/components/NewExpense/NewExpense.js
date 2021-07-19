import './NewExpense.css';

import ExpenseForm from './ExpenseForm/ExpenseForm.js';

const NewExpense = ()=>{
    return(
        <div className="new-expense">
            <ExpenseForm></ExpenseForm>
        </div>
    )
}

export default NewExpense;