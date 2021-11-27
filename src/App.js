import './App.css';
import Login from './Login/Login';
import Home from './Home';
import { Route, Routes } from 'react-router';
import WorkoutProgramList from './WorkoutProgram/WorkoutProgramList';
import RequireAuth from './Login/RequireAuth';
import { useAuth } from './Helpers/useAuth';
import ClientList from './Client/ClientList';
import { Roles } from './Helpers/Roles';
import { WorkoutProgramDetails } from './WorkoutProgram/WorkoutProgramDetail';

function App() {
	const { logout } = useAuth();
	return (
		<div className="App">
			<header className="App-header">
				{/* <RequireAuth children={<button onClick={logout}>Log out</button>}></RequireAuth> */}
			</header>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path="/workoutprograms"
					element={<WorkoutProgramList />}
					// {<RequireAuth children={<WorkoutProgramList />}></RequireAuth>}
				>
					{/* <Route path=":workoutProgramId" element={<WorkoutProgramDetails />} /> */}
				</Route>
				<Route path="/details/:workoutProgramId" element={<WorkoutProgramDetails />} />
				<Route
					path="/clients"
					element={<ClientList />}
					// {
					//   <RequireAuth children={<Clients/>} rolesRequired={[Roles.Client]}>
					//   </RequireAuth>
					// }
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
