import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';

import './App.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const valueChanged = (event)=>{
    console.log('App.js', event);
    setExpenses(
      (prevState)=>{
        return [...prevState, {
          id: event.id,
          title: event.enteredTitle,
          amount: event.enteredAmount,
          date: new Date(event.enteredDate)
        }]
      }
    )
  }

  return (    
    <div>     
      <NewExpense onValueChanged={valueChanged}></NewExpense>
      <Expenses list={expenses}></Expenses>
    </div>
  );
}

export default App;
