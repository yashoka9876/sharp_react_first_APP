import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React, { useState } from 'react';
function ExpenseItem(props){
    const [title,setTitle]=useState(props.title);
    const [amount,setAmound]=useState(props.amount);
    // let title = props.title;

    const clickHandler = ()=>{
        setTitle('Updated');
        console.log(title);
    }
    const amountHandler=()=>{
        setAmound(100);
    }
    console.log("by")
    console.log(title)
  
    
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={amount}  location={props.location}   title={title} />  
            <button onClick={clickHandler}>Change Title</button> 
            <button onClick={amountHandler}>changeAmount</button>     
        </Card>
    )
}
export default ExpenseItem