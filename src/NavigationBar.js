import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/workoutOverview">Workout Overview</NavLink>
      &nbsp;&nbsp;&nbsp;
      {/* <NavLink to="/workoutdetails">Workout Details</NavLink>&nbsp;&nbsp;&nbsp; */}
      <NavLink to="/ WorkoutProgramList">Workout List</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to="/clients">Client</NavLink>&nbsp;&nbsp;&nbsp;
    </nav>
  );
}
