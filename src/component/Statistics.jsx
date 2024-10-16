import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import { useUserContext } from '../UserContext'; 
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';


ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Statistics = () => {
  const { workouts } = useUserContext(); 
  const lineChartRef = useRef(null); 
  const barChartRef = useRef(null); 

  
  const lineData = {
    labels: workouts.map(workout => workout.date).slice(-4), 
    datasets: [
      {
        label: 'Calories Burned',
        data: workouts.map(workout => workout.calories).slice(-4), 
        borderColor: 'rgba(75, 192, 192, 1)', 
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderWidth: 2,
        fill: true,
      },
    ],
  };

 
  const activityDuration = workouts.reduce((acc, workout) => {
    acc[workout.activity] = (acc[workout.activity] || 0) + Number(workout.duration);
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(activityDuration),
    datasets: [
      {
        label: 'Duration (minutes)',
        data: Object.values(activityDuration),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', 
      },
    ],
  };

 
  const createGradient = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.6)'); 
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); 
    return gradient;
  };

  
  const createBarGradient = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 99, 132, 0.6)'); 
    gradient.addColorStop(1, 'rgba(255, 99, 132, 0)'); 
    return gradient;
  };

  
  useEffect(() => {
    if (lineChartRef.current) {
      const gradient = createGradient(lineChartRef.current.canvas);
      lineData.datasets[0].backgroundColor = gradient;
      lineChartRef.current.update();
    }

    if (barChartRef.current) {
      const gradient = createBarGradient(barChartRef.current.canvas);
      barData.datasets[0].backgroundColor = gradient;
      barChartRef.current.update();
    }
  }, [workouts]);

  return (
    <Container className="mt-5">
      <h2>Workout Statistics</h2>

      
      <h4>Calories Burned Over Time</h4>
      <Line ref={lineChartRef} data={lineData} />

      
      <h4>Activity Duration</h4>
      <Bar ref={barChartRef} data={barData} />
    </Container>
  );
};

export default Statistics;


