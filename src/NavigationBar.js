import { NavLink } from "react-router-dom";
import { Container, Nav } from "react";

export function Navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      {/* <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      
      </Container> */}
      <Nav className="me-auto">
        <NavLink to="/home"> Home</NavLink>
        <NavLink to="/workoutList">Workout List</NavLink>
        <NavLink to="/workoutdetails">Workout Details</NavLink>
      </Nav>
    </Navbar>
    /* <nav className="NavbarItems">
      <NavLink to="/home"> Home</NavLink>
      <NavLink to="/workoutList">Workout List</NavLink>
      <NavLink to="/workoutdetails">Workout Details</NavLink>
    </nav> */
  );
}
