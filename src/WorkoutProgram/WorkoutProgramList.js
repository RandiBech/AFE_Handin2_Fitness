import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Helpers/useAuth';
import { Roles } from '../Helpers/Roles';
import { TrainerTabel } from './TrainerTabel';
import { ClientTabel } from './ClientTabel';
import jwtDecode from 'jwt-decode';
import { Outlet } from 'react-router';

export default function WorkoutProgramList(props) {
	const [state, setState] = useState({ workoutPrograms: [] });
	const { authed, tokenPayload } = useAuth();

	const jwtToken = localStorage.getItem('jwtToken');
	const decodedPayload = jwtDecode(jwtToken);
	console.log(`tokenPayload: `,tokenPayload);

	const config = {
		headers: { Authorization: `Bearer ${jwtToken}` },
	};

	useEffect(() => {
		async function getWorkoutPrograms() {
			const baseUrl = 'https://afe2021fitness.azurewebsites.net/api/workoutPrograms';
			var rolePath = '';
			console.log(`Role: ${decodedPayload.Role}`);
			if (decodedPayload.Role === Roles.PersonalTrainer) {
				rolePath = '/trainer';
			} else if (decodedPayload.Role === Roles.Client) {
				console.log(`userID: ${decodedPayload.UserId}`);
				rolePath = `/client/${decodedPayload.UserId}`;
			}

			const res = await axios.get(`${baseUrl}${rolePath}`, config);
			setState({ workoutPrograms: res.data });
			console.log('list',res.data);
		}
		getWorkoutPrograms();
	}, []);

	return (
		<div>
			<h2>Workouts</h2>
			{decodedPayload.Role === Roles.PersonalTrainer ? (
				<TrainerTabel workoutPrograms={state.workoutPrograms} />
			) : ( <ClientTabel workoutPrograms={state.workoutPrograms} />
			)}
			<Outlet />
		</div>
	);
}
