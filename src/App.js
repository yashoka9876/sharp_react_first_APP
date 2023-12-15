
import Expenses from "./components/Expenses/Expenses";
import React from 'react';
import { ExpenseForm } from "./components/Forms/ExpenseForm";

const App=()=> {
  const expenses=[
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

  // return React.createElement('div',
  // {},
  // React.createElement('h2',{},'let\'s get started'),
  // React.createElement(Expenses,{expenses:expenses})
  // )

  return (
    <div>
      <h2>let's get started</h2>
      <ExpenseForm />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
