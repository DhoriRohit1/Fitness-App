import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext'; 

const WorkoutLog = () => {
  const { addWorkout } = useUserContext(); 
  const [workout, setWorkout] = useState({
    activity: '',
    duration: '',
    calories: '',
    date: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout); 
    navigate('/dashboard'); 
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
    <div className="p-4 border border-2 rounded shadow" style={{ maxWidth: '500px', width: '100%' }}>
      <h2 className="text-center mb-4">Log Workout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formActivity">
          <Form.Label>Activity Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter activity type"
            value={workout.activity}
            onChange={(e) => setWorkout({ ...workout, activity: e.target.value })}
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="formDuration">
          <Form.Label>Duration (in minutes)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter duration"
            value={workout.duration}
            onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCalories">
          <Form.Label>Calories Burned</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter calories burned"
            value={workout.calories}
            onChange={(e) => setWorkout({ ...workout, calories: e.target.value })}
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={workout.date}
            onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
            className="mb-3"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Log Workout
        </Button>
      </Form>
    </div>
  </Container>
  );
};

export default WorkoutLog;
