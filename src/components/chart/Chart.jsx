import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

// ExpenseChart에서 dataPoints 가져와서 활용하기
const Chart = ({dataPoints}) => {
    return (
        <div className="chart">
            {/* dataPoints 가져와서 ChartBar 만들면서 dataPoints 넘겨주기*/}
            {
                dataPoints.map(dp => <ChartBar key={dp.label} label={dp.label}/>)
            }
        </div>
    );
};

export default Chart;