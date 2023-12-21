import Chart from "../../Chart/Chart";


const ExpensesChart = props =>{
    const chartDataPoints=[
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'jul',value:0},
        {label:'aug',value:0},
        {label:'sep',value:0},
        {label:'nov',value:0},
        {label:'dev',value:0},
    ];

    for(const expense of props.expenses)
    {
        const expenseMonth = expense.date.getMonth(); //satrting at 0 => january =>0
        chartDataPoints[expenseMonth].value += expense.amount
    }
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;