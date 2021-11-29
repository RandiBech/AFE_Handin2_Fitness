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
import { WorkoutProgramDetails } from "./WorkoutProgram/WorkoutProgramDetail";
import ClientList from "./Client/ClientList";
import { ClientAdd } from "./Client/ClientAdd";

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
          path="/test"
          element={<WorkoutProgramDetails />}
          // {<RequireAuth children={<WorkoutProgramList />}></RequireAuth>}
        >
          {/* <Route path=":workoutProgramId" element={<WorkoutProgramDetails />} /> */}
        </Route>
        {/* <Route
          path="/workoutPrograms/:workoutProgramId"
          element={<WorkoutProgramDetails />}
        /> */}
        <Route
          path="/clients"
          element={<ClientList />}
          // {
          //   <RequireAuth children={<Clients/>} rolesRequired={[Roles.Client]}>
          //   </RequireAuth>
          // }
        />
        <Route path="addClient" element={<ClientAdd />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/workoutDetails/:workoutProgramId"
          element={<WorkoutProgramDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
