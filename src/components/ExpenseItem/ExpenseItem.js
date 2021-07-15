import ExpenseDate from '../ExpenseDate/ExpenseDate.js';

import './ExpenseItem.css';

const expenseItem = (props) =>{
    return(
        <div className="expense-item">            
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>        
    )
};

export default expenseItem;