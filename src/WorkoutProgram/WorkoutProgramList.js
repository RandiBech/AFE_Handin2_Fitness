import { useEffect, useState } from 'react';
import axios from 'axios';
import { Roles } from '../Helpers/Roles';
import { TrainerTabel } from './TrainerTabel';
import { ClientTabel } from './ClientTabel';
import { Outlet } from 'react-router';
import { useAuthContext } from '../Context/auth-context';

export default function WorkoutProgramList(props) {
	const [state, setState] = useState({ workoutPrograms: [] });
	const { tokenPayload, jwtToken } = useAuthContext();

	const config = {
		headers: { Authorization: `Bearer ${jwtToken}` },
	};

	useEffect(() => {
		async function getWorkoutPrograms() {
			const baseUrl = 'https://afe2021fitness.azurewebsites.net/api/workoutPrograms';
			var rolePath = '';
			if (tokenPayload.Role === Roles.PersonalTrainer) {
				rolePath = '/trainer';
			} else if (tokenPayload.Role === Roles.Client) {
				rolePath = `/client/${tokenPayload.UserId}`;
			}

			const res = await axios.get(`${baseUrl}${rolePath}`, config);
			setState({ workoutPrograms: res.data });
		}
		getWorkoutPrograms();
	}, []);

	return (
		<div>
			<h2>Workouts</h2>
			{tokenPayload.Role === Roles.PersonalTrainer ? (
				<TrainerTabel workoutPrograms={state.workoutPrograms} />
			) : (
				<ClientTabel workoutPrograms={state.workoutPrograms} />
			)}
			<Outlet />
		</div>
	);
}
