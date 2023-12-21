import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props =>{
    const dataPoints=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...dataPoints);
    return <div className="chart">
        {props.dataPoints.map(dataPoints =>
         <ChartBar
         key={dataPoints.label}
         value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}/>)}
    </div>
}

export default Chart;