import React, { createContext, useState, useContext, useEffect } from 'react';


const UserContext = createContext();


export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [workouts, setWorkouts] = useState(() => {
    
    const storedWorkouts = localStorage.getItem('workouts');
    return storedWorkouts ? JSON.parse(storedWorkouts) : [];
  });

  const [goal, setGoal] = useState(() => {
   
    return localStorage.getItem('goal') || '';
  });

  const addWorkout = (workout) => {
    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts); 
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts)); 
  };

  const loginUser = (userData) => {
    setUser(userData); 
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null); 
    localStorage.removeItem('user'); 
  };

  const updateGoal = (newGoal) => {
    setGoal(newGoal); 
    localStorage.setItem('goal', newGoal); 
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, workouts, addWorkout, goal, updateGoal }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
