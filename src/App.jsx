import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import GoalList from './components/GoalList'
import GoalCard from './components/GoalCard'
import AddGoalForm from './components/AddGoalForm'
import EditGoalForm from './components/EditGoalForm'
import DepositForm from './components/DepositForm'
import Overview from './components/Overview'

function App() {
  const [goals, setGoals] = useState("")
  return (
    <>
    </>
  )
}

export default App
