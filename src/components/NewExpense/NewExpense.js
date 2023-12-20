import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

export function NewExpense(props){

    const [selectbf,setSelecetbf]=useState(false);

    const SaveExpenseData=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setSelecetbf((state)=> !state);
    }

    function handleSelectbf(){
        setSelecetbf((state)=>!state);
    }
    
   
    return (
    <div className='new-expense'>
       {!selectbf ? <button onClick={handleSelectbf}>Add Item</button>:
        <ExpenseForm onSaveExpenseData={SaveExpenseData} onhandelSelectbf={handleSelectbf}/>}
    </div>
    )
}