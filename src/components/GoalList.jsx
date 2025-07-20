import GoalCard from './GoalCard';

function GoalList({ goals, setGoals}) {
    return (
        <div className="goal-list">
            <h2>Your Goals!</h2>
            {goals.length === 0 ? (
                <p>No goals yet. Start by adding one.</p>
            ) : (
                goals.map((goal) => (
                    <GoalCard 
                    key={goal.id}
                    goal={goal}
                    setGoals={setGoals}
                    />
                ))
            )}
        </div>
    )
}

export default GoalList;