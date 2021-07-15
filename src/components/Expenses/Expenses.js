import './Expenses.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem.js';

const Expenses = (props)=>{
    const expensesList = props.list.map( 
        (expense)=>{
            return(
                <ExpenseItem          
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