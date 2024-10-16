import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');

  const handleSetGoal = (e) => {
    e.preventDefault();
    
    localStorage.setItem('fitnessGoal', goal);
    setGoal(''); 
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div className="p-4 border border-2 rounded shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Set Fitness Goal</h2>
        <Form onSubmit={handleSetGoal}>
          <Form.Group controlId="formGoal">
            <Form.Label>Weekly or Monthly Goal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your goal (e.g., Run 10 miles)"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="mb-3"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Set Goal
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default GoalSetting;
