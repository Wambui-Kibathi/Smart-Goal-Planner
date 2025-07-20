import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import GoalList from './components/GoalList'
import AddGoalForm from './components/AddGoalForm'
import EditGoalForm from './components/EditGoalForm'
import DepositForm from './components/DepositForm'
import Overview from './components/Overview'

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
    .then((res) => res.json())
    .then((data) => setGoals(data))
    .catch((err) => console.err("Error fetching goals.", err));
  }, []);

  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/add">Add Goal</NavLink> |{" "}
        <NavLink to="/overview">Overview</NavLink>
      </nav>

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
    </Router>
  );
}

export default App;
