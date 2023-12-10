import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses({expenses}){
    
    return (
       <Card className="expense">
            <h2>Let's get started</h2>
            {expenses.map((expense)=><ExpenseItem loc_of_exp={expense.location_of_expenditure} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </Card>
)
}

export default Expenses;