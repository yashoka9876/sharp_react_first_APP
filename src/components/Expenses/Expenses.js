import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses({expenses}){
    
    return (
       <Card className="expense">
            <h2>Let's get started</h2>
            {expenses.map((expense)=><ExpenseItem key={expense.id} loc_of_exp={expense.location_of_expenditure} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </Card>
)
}

export default Expenses;