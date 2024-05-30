// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ feedEvents }) => {
  const data = {
    labels: feedEvents.map(event => event.timestamp),
    datasets: [
      {
        label: 'Feeding Distance (cm)',
        data: feedEvents.map(event => event.distance),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Distance (cm)'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
