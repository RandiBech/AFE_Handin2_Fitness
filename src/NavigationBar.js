import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/home"> Home</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/workoutOverview">Workout Overview</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to="/workoutdetails">Workout Details</NavLink>&nbsp;&nbsp;&nbsp;
    </nav>
  );
}
