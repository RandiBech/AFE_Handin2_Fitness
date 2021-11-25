import './App.css';
import Login from './Login/Login';
import Home from './Home';
import { Route, Routes } from 'react-router';
import WorkoutProgramList from './WorkoutProgram/WorkoutProgramList';
import RequireAuth from './Login/RequireAuth';
import Clients from './Client/ClientList';
import { Roles } from './Helpers/Roles';

function App() {

  return (
      <div className="App">

        <header className="App-header">
          {/* <RequireAuth children={<button onClick={logout}>Log out</button>}></RequireAuth> */}
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workoutprograms"
            element={
              <RequireAuth children={<WorkoutProgramList />}>
              </RequireAuth>
            } />
          <Route path="/clients"
            element={
              <RequireAuth children={<Clients />} rolesRequired={[Roles.Client]}>
              </RequireAuth>
            } />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* </AuthProvider> */}
      </div>
  );
}

export default App;
