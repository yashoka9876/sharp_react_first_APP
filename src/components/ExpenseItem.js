import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    // const expneseDate= new Date(2021,2,28);
    // const expenseTitle= 'Car Insurance';
    // const expenseAmount=294.67;
    // const LocationOfExpenditure ="delhi"
  

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
           
        </div>
    )
}
export default ExpenseItem