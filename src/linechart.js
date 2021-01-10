import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
   
  const LineChart = props => {
      const {labs, datap, tit} = props;
      const data  = {
          labels: labs,
          datasets: [
            {
              label: tit,
              data: datap,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],};
        
      return (
          <div>
               <Line data={data} options={options} />
          </ div>
      );
  };

export default LineChart;