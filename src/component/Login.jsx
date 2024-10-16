import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const Login = () => {
  const { loginUser } = useUser(); // Use context to set user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError('');
      loginUser(storedUser); // Update context
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div className="box1 p-4 border border-2 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleLogin}>
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

          {error && <p className="text-danger text-center">{error}</p>}

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>

          <Button
            variant="link"
            className="d-block text-center mt-3"
            onClick={() => navigate('/signup')}
          >
            Don't have an account? Sign up
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
