import "./App.css";
import Login from "./Login/Login";
import Home from "./Home";
import { Route, Routes } from "react-router";
import WorkoutProgramList from "./WorkoutProgram/WorkoutProgramList";
import RequireAuth from "./Login/RequireAuth";
import { useAuth } from "./Helpers/useAuth";
import Clients from "./Client/ClientList";
import { Roles } from "./Helpers/Roles";
import { Navbar } from "./NavigationBar";
import WorkoutOverview from "./WorkoutProgram/WorkoutOverview";

function App() {
  const { logout } = useAuth();
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hitness!</h3>
        {/* <RequireAuth children={<button onClick={logout}>Log out</button>}></RequireAuth> */}
      </header>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route
          path="/workoutOverview"
          element={<RequireAuth children={<WorkoutOverview />}></RequireAuth>}
        />
        <Route
          path="/workoutprograms"
          element={
            <RequireAuth children={<WorkoutProgramList />}></RequireAuth>
          }
        />
        <Route
          path="/clients"
          element={
            <RequireAuth
              children={<Clients />}
              rolesRequired={[Roles.Client]}
            ></RequireAuth>
          }
        />
        <Route path="/test" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
