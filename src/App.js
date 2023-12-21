
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';
import { NewExpense } from "./components/NewExpense/NewExpense";
const data = [
  {
    id:'e1',
    title:'Toilet Paper',
    amount:102.12,
    date:new Date(2020,7,30)
  },
  {
    id:'e2',
    title:'TV',
    amount:111.12,
    date:new Date(2022,8,25)
  },
  {
    id:'e13',
    title:'Car Insurance',
    amount:500.12,
    date:new Date(2022,9,4)
  },
  {
    id:'e4',
    title:'New Desk (Wooden)',
    amount:221.12,
    date:new Date(2021,2,1)
  }
];



const App=()=> {
 
  const [expenses,setExpenses]=useState(data);
  
  const addExpenseHandler = expense1 =>{
    console.log('In App.js');
    console.log(expenses.date);
    setExpenses(expense=>[...expense,expense1])

  }
  setTimeout(()=>{
    console.log(expenses)
  },1000)
 

  return (
    <div>
      <h2>let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
