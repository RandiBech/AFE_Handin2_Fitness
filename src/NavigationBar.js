import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to="/workoutPrograms">Workout Program</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to="/clients">Client</NavLink>&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
    </nav>
  );
}
