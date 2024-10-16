import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import WorkoutLog from './component/WorkoutLog';
import GoalSetting from './component/GoalSetting';
import Statistics from './component/Statistics';
import Header from './component/Header'; // Import Header
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header /> {/* Include Header here */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/log-workout" element={<WorkoutLog />} />
        <Route path="/set-goal" element={<GoalSetting />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;
