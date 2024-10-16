import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; 

const Header = () => {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Fitness Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/log-workout">Log Workout</Nav.Link>
                <Nav.Link as={Link} to="/set-goal">Set Goal</Nav.Link>
                <Nav.Link as={Link} to="/statistics">Statistics</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/">Home</Nav.Link> 
            )}
          </Nav>
          {user ? (
            <div className="d-flex align-items-center">
              <span className="text-white me-3">Welcome, {user.email}</span> 
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button> 
            </div>
          ) : (
            <Button variant="outline-light" as={Link} to="/login">Login</Button> 
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
