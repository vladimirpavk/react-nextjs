import { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate.js';

import './ExpenseItem.css';

const ExpenseItem = (props) =>{

    const [title, setTitle]  = useState(props.title);

    const buttonClicked = ()=>{
        console.log('Button clicked');
        setTitle('Title updated !!!');
    }

    return(
        <div className="expense-item">            
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={buttonClicked}>Change text</button>
        </div>        
    )
};

export default ExpenseItem;