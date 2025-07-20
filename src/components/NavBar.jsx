import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="logo">
            Smart Goal Planner
        </div>
        <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>Add Goal</NavLink>
        <NavLink to="/overview" className={({ isActive }) => isActive ? 'active' : ''}>Overview</NavLink>
        </div>
    </nav>
  );
}

export default NavBar;