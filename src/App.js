import ExpenseItem from "./components/ExpenseItem";

function App() {

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
  return (
    <div >
      <h2>Let's get started</h2>
      {/* <ExpenseItem loc_of_exp={expenses[0].location_of_expenditure} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem loc_of_exp={expenses[1].location_of_expenditure} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem loc_of_exp={expenses[2].location_of_expenditure} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem loc_of_exp={expenses[3].location_of_expenditure} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> */}
      {expenses.map((expense)=><ExpenseItem loc_of_exp={expense.location_of_expenditure} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </div>
  );
}

export default App;
