import { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpencesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'



function Expenses({expenses}){
    
    const [filteredItems,setFilteredItems]=useState('2022');

   

    function handleFilteredItems(year){
        setFilteredItems(year);
    }

   const filterExpences=expenses.filter((item)=>{
       return item.date.getFullYear().toString() === filteredItems.toString()
   })
  
   let content='';
   if(filterExpences.length===0){
    content=<p className="textStyleP">No element is present</p>
   }else if(filterExpences.length===1){
    content= filterExpences.map((expense)=>
    <ExpenseItem 
       key={expense.id}
       loc_of_exp={expense.location_of_expenditure} 
       title={expense.title} amount={expense.amount}
      date={expense.date}
   />)

   }else{
    content= filterExpences.map((expense)=>
    <ExpenseItem 
       key={expense.id}
       loc_of_exp={expense.location_of_expenditure} 
       title={expense.title} amount={expense.amount}
      date={expense.date}
   />)
   }

   
    
    return (
       <Card className="expense">
            <ExpensesFilter handleFilterItem={handleFilteredItems}/>
            {content}
            {filterExpences.length===1 && <p className="textStyleP">One element is present add more...</p>}
        </Card>
)
}

export default Expenses;