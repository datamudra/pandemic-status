import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

const options = {
    legend: { position: 'right', display : false},
    title: {
        display: false,
    //     text: '',
    //     position: 'top'
     },
    scales: {
        yAxes:[
                {
                    type: 'linear', display: true, position: 'left', id: 'yx1',
                    ticks:{ beginAtZero: true, autoSkip: true, maxTicksLimit: 4},
                },
                {   type: 'linear', display: false, position: 'right', id: 'yx2', gridLines: {drawOnArea: false} ,
                    ticks: { beginAtZero: true, autoSkip: true, maxTicksLimit: 4 }
                }
                ],      
      xAxes: [
                { type: 'time', ticks: { autoSkip: true, maxTicksLimit: 4}
                }
             ]
    },
  };
   
  const LineChart = props => {
      const {labs, datal, datar, locl, locr} = props;
      const data  = {
                    labels: labs,
                    datasets: 
                    [
                        {
                        label: locl,
                        data: datal,
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                        yAxisID: 'yx1',
                        },
                        {
                        label: locr,
                        data: datar,
                        fill: false,
                        backgroundColor: 'rgb(54, 162, 235)',
                        borderColor: 'rgba(54, 162, 235, 0.2)',
                        yAxisID: 'yx1',
                        },
                    ],
                    }; 
      return (
          
               <Line data={data} options={options} />
          
      );
  }; 

export default LineChart;