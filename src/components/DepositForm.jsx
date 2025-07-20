import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function DepositForm({ goals, setGoals }) {
  const { id } = useParams();
  const goal = goals.find((g) => g.id === id);
  const [deposit, setDeposit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + parseFloat(deposit),
    };

    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedGoals = goals.map((g) =>
          g.id === id ? data : g
        );
        setGoals(updatedGoals);
        setDeposit("");
      })
      .catch((err) => console.error("Error adding deposit:", err));
  };

  if (!goal) return <p>Loading goal...</p>;

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <h2>Deposit to {goal.name}</h2>

      <label>
        Amount:
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Deposit</button>
      <NavLink to="/">Cancel</NavLink>
    </form>
  );
}

export default DepositForm;