import React from "react";
import ChartBar from './ChartBar';
import './Chart.css'

const Chart =props =>{
    const dps=props.datapoints.map(d=>d.value);
    const ma=Math.max(...dps)
    return <div className="chart">
        {props.datapoints.map((dp)=>(
        <ChartBar
        key={dp.label}
        value={dp.value} 
        max={ma} 
        label={dp.label}

        />
        ))}
    </div>


};
export default Chart;
