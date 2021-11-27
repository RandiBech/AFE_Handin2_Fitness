import './App.css';
import Login from './Login/Login';
import Home from './Home';
import { Route, Routes } from 'react-router';
import WorkoutProgramList from './WorkoutProgram/WorkoutProgramList';
import RequireAuth from './Login/RequireAuth';
import { useAuth } from './Helpers/useAuth';
import ClientList from './Client/ClientList';
import { Roles } from './Helpers/Roles';
import ClientDetail from './Client/ClientDetail';
import { WorkoutProgramDetails } from './WorkoutProgram/WorkoutProgramDetail';

function App() {
	const { logout } = useAuth();
	return (
		<div className="App">
			<header className="App-header">
				{/* <RequireAuth children={<button onClick={logout}>Log out</button>}></RequireAuth> */}
			</header>

			<Routes>
				<Route
					path="/workoutprograms"
					element={<WorkoutProgramList />}
				// {<RequireAuth children={<WorkoutProgramList />}></RequireAuth>}
				>
					{/* <Route path=":workoutProgramId" element={<WorkoutProgramDetails />} /> */}
				</Route>
				<Route path="/workoutPrograms/:workoutProgramId" element={<WorkoutProgramDetails />} />
				<Route path="/" element={<Home />} />
				<Route path="/workoutprograms"
					element={
						<RequireAuth children={<WorkoutProgramList />}>
						</RequireAuth>
					} />
				<Route path="/clients"
					element={<ClientList />}
				// {
				//   <RequireAuth children={<Clients/>} rolesRequired={[Roles.Client]}>
				//   </RequireAuth>
				// } 
				/>
				<Route path="/clients/:id" element={<ClientDetail />}></Route>
				<Route path="/login" element={<Login />} />
			</Routes>

		</div>
	);
}

export default App;
