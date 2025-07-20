import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>Add Goal</NavLink>
        <NavLink to="/overview" className={({ isActive }) => isActive ? 'active' : ''}>Overview</NavLink>
    </nav>
  );
}

export default NavBar;