import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Statistics from './Statistics';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState('');

  useEffect(() => {
    
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(storedWorkouts);

    
    const storedGoal = localStorage.getItem('fitnessGoal') || '';
    setGoal(storedGoal);
  }, []);

  return (
    <Container className="mt-5">
      <h2>Dashboard</h2>

     
      {goal && (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Your Fitness Goal</Card.Title>
            <Card.Text>{goal}</Card.Text>
          </Card.Body>
        </Card>
      )}

      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        workouts.map((workout, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{workout.activity}</Card.Title>
              <Card.Text>
                Duration: {workout.duration} minutes <br />
                Calories Burned: {workout.calories} <br />
                Date: {new Date(workout.date).toLocaleDateString()}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
      <Statistics />
    </Container>
  );
};

export default Dashboard;
