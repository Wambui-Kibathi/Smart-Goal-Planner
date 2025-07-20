import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import EditGoalForm from './components/EditGoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';
import NavBar from './components/NavBar';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals.", err));
  }, []);

  return (
    <Router>
      <NavBar />

      <div className='main-content'>
        <div className="title-card">
          <h1 className="page-title">Your Goals!</h1>
        </div>

        <Routes>
          <Route 
            path="/"
            element={<GoalList goals={goals} setGoals={setGoals} />}
          />
          <Route 
            path="/add"
            element={<AddGoalForm goals={goals} setGoals={setGoals} />}
          />
          <Route 
            path="/edit/:id"
            element={<EditGoalForm goals={goals} setGoals={setGoals} />}
          />
          <Route 
            path="/deposit/:id"
            element={<DepositForm goals={goals} setGoals={setGoals} />}
          />
          <Route 
            path="/overview"
            element={<Overview goals={goals} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;