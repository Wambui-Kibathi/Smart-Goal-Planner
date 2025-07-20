import { useState} from 'react';

function AddGoalForm() {
    const [name, setName] = useState("");
    const [targetAmount, setTargetAmount] = useState("");
    const [category, setCategory] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGoal = {
            name,
            targetAmount: parseFloat(targetAmount),
            savedAmount: 0,
            category,
            deadline,
            createdAt: new Date().toISOString().split("T")[0],
        };

        fetch("http://localhost:3000/goals",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGoal),
        })
        .then((res) => res.json())
        .then((data) => {
            setGoals([...GoalList, data]);
            // Reset form fields
            setName("");
            setTargetAmount("");
            setCategory("");
            setDeadline("");
        })
        .catch((err) => console.err("Error adding goal.", err));
    };

    return (
        <form onSubmit={handleSubmit} className="add-goal-form">
            <h2>Add New Goal</h2>
            <label>
                Name:
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </label>
            <label>
                Target Amount:
                <input
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                required
                />
            </label>
            <label>
                Category:
                <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                />
            </label>
            <label>
                Deadline:
                <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                />
            </label>
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default AddGoalForm;