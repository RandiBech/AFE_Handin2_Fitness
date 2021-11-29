import "./App.css";
import Login from "./Login/Login";
import Home from "./Home";
import { Route, Routes } from "react-router";
import WorkoutProgramList from "./WorkoutProgram/WorkoutProgramList";
import RequireAuth from "./Login/RequireAuth";
import { Roles } from "./Helpers/Roles";
import { Navbar } from "./NavigationBar";
import { WorkoutProgramDetails } from "./WorkoutProgram/WorkoutProgramDetail";
import ClientList from "./Client/ClientList";
import { ClientAdd } from "./Client/ClientAdd";
import ClientDetail from "./Client/ClientDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hitness!</h3>
      </header>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route
          path="/test"
          element={<WorkoutProgramDetails />}
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
          element={
            <RequireAuth
              children={<WorkoutProgramDetails />}
              rolesRequired={[Roles.PersonalTrainer, Roles.Client]}
            ></RequireAuth>
          }

        />
        <Route
          path="/Clients"
          element={
            <RequireAuth
              children={<ClientList />}
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
