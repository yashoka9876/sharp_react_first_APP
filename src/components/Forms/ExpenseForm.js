export function ExpenseForm(){
    const ExpenseTitleHandler=(event)=>{
        console.log(event.target.value);
    }
    const ExpenseAmountHandler=(event)=>{
        console.log(event.target.value);
    }
    const ExpenseDateHandler=(event)=>{
        console.log(event.target.value);
    }

    return (
    <div>
         <form>
            <input onChange={ExpenseTitleHandler} type="text" placeholder="Expense title"/>
            <input onChange={ExpenseAmountHandler} type="text" placeholder="Expense Amount" />
            <input onChange={ExpenseDateHandler} placeholder="Expense Date"/>
            <button>Add_item</button>
        </form>
    </div>
    )
}