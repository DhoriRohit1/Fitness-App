import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';


const Signup = () => {
  const { loginUser } = useUser(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    setError('');
    loginUser(newUser); 
    navigate('/'); 
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
    <div className="p-4 border border-2 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-3"
            required
          />
        </Form.Group>

        {error && <p className="text-danger text-center">{error}</p>}

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Sign Up
        </Button>
      </Form>
    </div>
  </Container>
  );
};

export default Signup;
