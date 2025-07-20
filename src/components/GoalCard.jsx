import { NavLink } from "react-router-dom";

function GoalCard({ goal, setGoals }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((g) => g.id !== goal.id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
  };

  const progressPercent = Math.min(
    (goal.savedAmount / goal.targetAmount) * 100,
    100
  ).toFixed(1);

  const remainingAmount = goal.targetAmount - goal.savedAmount;

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Remaining: ${remainingAmount}</p>
      <p>Deadline: {goal.deadline}</p>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercent}%` }}
        >
          {progressPercent}%
        </div>
      </div>

      {/* Action buttons using NavLink */}
      <NavLink to={`/edit/${goal.id}`}>
        <button>Edit</button>
      </NavLink>

      <NavLink to={`/deposit/${goal.id}`}>
        <button>Deposit</button>
      </NavLink>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default GoalCard;