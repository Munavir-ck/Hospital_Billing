import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';


const LineChart = () => {
  const chartRef = useRef(null);
  

  

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: ['jan','feb','mar','apr','may'],
        datasets: [
          {
            label: 'Total Revenue',
            data: [2,3,4,5,6],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Total Profit',
            data:[2,3,4,5,6],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
          },
          {
            label: 'Total Booking',
            data:[2,3,4,5,6],
            borderColor: 'rgba(11, 243, 28, 0.8)',
            backgroundColor: 'rgba(11, 243, 28, 0.8)',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  });

  return (
    <div className='h-96 w-full'>
      <canvas ref={chartRef} style={{ height: '200px', width: '200px' }} />
    </div>
  );
};

export default LineChart;