import './Expenses.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem.js';

const Expenses = (props)=>{
    const expensesList = props.list.map( 
        (expense, index)=>{
            return(
                <ExpenseItem          
                    key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            )
      });

    return(
        <div className="expenses">
            {expensesList};
        </div>
    );
}

export default Expenses;