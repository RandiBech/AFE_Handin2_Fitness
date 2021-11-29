import { NavLink } from "react-router-dom";
import { useAuthContext } from "./Context/auth-context";

export function Navbar() {
  const { authed, logout } = useAuthContext();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to="/workoutPrograms">Workout Program</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to="/clients">Client</NavLink>&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      {authed && ( <button onClick={logout}>Log out</button>)}
    </nav>
  );
}
