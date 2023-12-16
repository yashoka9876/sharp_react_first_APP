import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

export function NewExpense(props){

    const SaveExpenseData=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
   
    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={SaveExpenseData} />
    </div>
    )
}