# Smart Goal Planner
Smart Goal Planner is a React dashboard application for managing multiple savings goals. Users can create, update, delete, and track progress on their financial goals dynamically using a local JSON server.
## Installation
Use [npm](https://www.npmjs.com/) and [json-server](https://www.npmjs.com/package/json-server) to set up Smart Goal Planner.
### Clone the repository
```bash
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
```
### Install dependencies
```bash
npm install
```
### Set up json-server
Install json-server globally if you haven't:
```bash
npm install -g json-server
```
Then run json-server with your db.json:
```bash
json-server --watch db.json --port 3000
```
## Start your React App
```bash
npm run dev
```
Your app will be available at http://localhost:5173 by default (Vite).
## Usage
- View all goals: Dashboard displays each goal with its progress bar and details.
- Add new goal: Navigate to Add Goal and fill out the form to create a new goal.
- Edit goal: Click on Edit for any goal to update its details.
- Delete goal: Remove any goal from your list.
- Make deposits: Add a deposit amount towards a goal to track your savings progress.
- Overview: View total goals, total saved, goals completed, deadlines, time left, warnings, and overdue statuses.
### Example CRUD usage (API endpoints)
- GET all goals: http://localhost:3000/goals
- POST new goal: http://localhost:3000/goals
- PATCH goal update: http://localhost:3000/goals/:id
- DELETE goal: http://localhost:3000/goals/:id
## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
Please make sure to update components and styling as appropriate.
## License
MIT
## Author
Wambui Kibathi