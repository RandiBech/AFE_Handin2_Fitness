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
import { WorkoutProgramDetails } from "./WorkoutProgram/WorkoutProgramDetail";
import ClientList from "./Client/ClientList";
import { ClientAdd } from "./Client/ClientAdd";
import ClientDetail from "./Client/ClientDetail";

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
        ></Route>
        <Route
          path="/workoutPrograms"
          element={
            <RequireAuth
              children={<WorkoutProgramList />}
              rolesRequired={[Roles.PersonalTrainer, Roles.Client]}
            ></RequireAuth>
          }
        />
        <Route
          path="/workoutPrograms/:workoutProgramId"
          element={<WorkoutProgramDetails />}
        />
        <Route
          path="/Clients"
          element={
            //   {<ClientList />}
            <RequireAuth
              children={<Clients />}
              rolesRequired={[Roles.PersonalTrainer]}
            ></RequireAuth>
          }
        />
        <Route path="/Clients/addClient" element={<ClientAdd />} />
        <Route
          path="/Clients/:id"
          element={
            <RequireAuth
              children={<ClientDetail />}
              rolesRequired={[Roles.PersonalTrainer]}
            ></RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
