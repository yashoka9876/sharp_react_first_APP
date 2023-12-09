import './ExpenseItem.css'
function ExpenseItem(){
    const expneseDate= new Date(2021,2,28);
    const expenseTitle= 'Car Insurance';
    const expenseAmount=294.67;
    const LocationOfExpenditure ="delhi"

    return(
        <div className="expense-item">
            <div>{expneseDate.toISOString()}</div>
             <div className="expense-item__price">{LocationOfExpenditure}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem