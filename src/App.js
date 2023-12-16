
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';
import { NewExpense } from "./components/NewExpense/NewExpense";



const App=()=> {
  const data=[
    {
      id:'e1',
      title:'Toilet Paper',
      amount:232,
      date:new Date(2022,2,28),
      location_of_expenditure:"delhi"
    },
    {
      id:'e2',
      title:'Toilet Paper',
      amount:232,
      date:new Date(2022,2,28),
      location_of_expenditure:"chandigarh"
    },
    {
      id:'e3',
      title:'Toilet Paper',
      amount:232,
      date:new Date(2022,2,28),
      location_of_expenditure:"hariyana"
    },
    {
      id:'e4',
      title:'Toilet Paper',
      amount:232,
      date:new Date(2022,2,28),
      location_of_expenditure:"Amritsar"
    }
  ]
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
