import { NavLink } from "react-router-dom";
import { Nav } from "react";

export function Navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
        <NavLink to="/home"> Home</NavLink>
        <NavLink to="/workoutList">Workout List</NavLink>
        <NavLink to="/workoutdetails">Workout Details</NavLink>
      </Nav>
    </Navbar>
  );
}
