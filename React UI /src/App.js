import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <header>
        <h1>Cleo's Exercise Tracker</h1>
        <p>A Full Stack MERN App to Track Exercise</p>
      </header>
      <p>Click on the text in the NavBar to Navigate to Home or to Create a New Exercise. Click an icon in the table below to edit or delete</p>
      <Router>
        <div className="App-header">
          <Navigation />
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
      </Router>
      <footer>© 2022 Cleo Golds</footer>
    </div>

  );
}

export default App;